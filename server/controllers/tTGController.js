const { QueryTypes } = require("sequelize");
const db = require("../db");
const apiErrors = require("../errors/apiErrors");

class TTGController {
  async getAll(req, res, next) {
    // Получить все записи
    const { page, limit } = req.query;

    const offset = (page - 1) * limit;
    if ((page || limit) == null) {
      const result = await db.query(
        "SELECT * FROM tabletop_games ORDER BY game_id ASC",
        { type: QueryTypes.SELECT }
      );
      return res.status(200).json(result);
    }
    if (isNaN(page) || isNaN(limit)) {
      return next(apiErrors.badRequest("некоректные данные"));
    }
    if (offset < 0) {
      return next(apiErrors.badRequest("страница не может быть больше нуля"));
    }
    const [result, metadata] = await db.query(
      "SELECT * FROM tabletop_games ORDER BY game_id ASC limit $limit offset $offset",
      { bind: { limit, offset } },
      { type: QueryTypes.SELECT }
    );
    const [count, meta] = await db.query(
      `SELECT COUNT(*) FROM tabletop_games`,
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({ result, count });
  }

  async getOne(req, res, next) {
    // Получить запись по {id}
    const id = req.params.id;
    if (isNaN(id)) {
      return next(apiErrors.badRequest("некоректные данные"));
    }
    const [result, metadata] = await db.query(
      `SELECT * FROM tabletop_games WHERE game_id = $id`,
      { bind: { id } },
      { type: QueryTypes.SELECT }
    );
    if (!result.length) {
      return next(apiErrors.noContent("Такой записи не существует"));
    }
    res.status(200).json(result);
  }

  async addGame(req, res, next) {
    const { name, publId } = req.body;

    if (name == "") {
      return next(apiErrors.badRequest("Имя не было получено"));
    }

    if (publId == "" || null) {
      return next(apiErrors.badRequest("Издатель не был получен"));
    }

    const [result, metadata] = await db.query(
      `SELECT * FROM tabletop_games WHERE game_name = $name`,
      { bind: { name } },
      { type: QueryTypes.SELECT }
    );
    if (result.length) {
      return next(apiErrors.Conflict("Такая игра уже существует"));
    }

    const [data, meta] = await db.query(
      `SELECT * FROM publishers WHERE publ_id = $publId`,
      { bind: { publId } },
      { type: QueryTypes.SELECT }
    );
    if (!data.length) {
      return next(apiErrors.badRequest("Такого издателя не существет"));
    }
    await db.query(
      `INSERT INTO tabletop_games (game_name,fk_publ_id) VALUES ($name,$publId)`,
      { bind: { name, publId } },
      { type: QueryTypes.INSERT }
    );
    res.status(200).json({ message: "Запись создана" });
  }

  async removeOne(req, res, next) {
    // Удалить запись по {id}
    const id = req.params.id;

    if (isNaN(id)) {
      return next(apiErrors.badRequest("некоректные данные"));
    }
    if (null) {
      return next(apiErrors.badRequest("некоректные данные"));
    }
    const [result, metadata] = await db.query(
      `SELECT * FROM tabletop_games WHERE game_id = $id`,
      { bind: { id } },
      { type: QueryTypes.SELECT }
    );
    if (!result.length) {
      return next(apiErrors.badRequest("Такой записи не существует"));
    } else {
      await db.query(
        `DELETE FROM tabletop_games WHERE game_id = $id`,
        { bind: { id } },
        { type: QueryTypes.DELETE }
      );
      res.status(200).json({ message: "Запись успешно удалена" });
    }
  }

  async update(req, res, next) {
    const id = req.params.id;
    const { name, publId } = req.body;
    if (isNaN(id) || isNaN(publId)) {
      return next(apiErrors.badRequest("некоректные данные"));
    }

    if (!publId.length) {
      return next(apiErrors.badRequest("Поле издателя должно быть заполнено"));
    }
    if (!name.length) {
      return next(apiErrors.badRequest("Поле названия должно быть заполнено"));
    }
    const [result, metadata] = await db.query(
      `SELECT * FROM publishers WHERE publ_id = $publId`,
      { bind: { publId } },
      { type: QueryTypes.SELECT }
    );
    if (!result.length) {
      return next(apiErrors.badRequest("Такого издателя не существует"));
    }

    await db.query(
      "UPDATE tabletop_games SET game_name = $name, fk_publ_id = $publId WHERE game_id = $id ",
      { bind: { name, publId, id } },
      { type: QueryTypes.UPDATE }
    );
    res.status(200).json({ message: "Запись обновлена" });
  }

  async check(req, res, next) {
    const [result, metadata] = await db.query(
      `SELECT COUNT(*) FROM tabletop_games`,
      { type: QueryTypes.SELECT }
    );
    res.status(200).json(result);
  }
}

module.exports = new TTGController();
