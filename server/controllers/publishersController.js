const { QueryTypes } = require("sequelize");
const db = require("../db");
const apiErrors = require("../errors/apiErrors");
const publishersModel = require("../models/publishers_Model");

class PublishersController {
  async getAll(req, res, next) {
    // Получить все записи query{page,limit}
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;
    const [count, meta] = await db.query("SELECT COUNT(*) FROM publishers");
    if ((page || limit) == null) {
      const result = await db.query(
        "SELECT * FROM publishers ORDER BY publ_id ASC ",
        { type: QueryTypes.SELECT }
      );
      return res.status(200).json({ count, result });
    }
    if (isNaN(page) || isNaN(limit)) {
      return next(apiErrors.badRequest("некоректные данные"));
    }
    if (offset < 0) {
      return next(apiErrors.badRequest("страница не может быть меньше нуля"));
    }
    const [result, metadata] = await db.query(
      "SELECT * FROM publishers ORDER BY publ_id ASC limit $limit offset $offset  ",
      { bind: { limit, offset } },
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({ count, result });
  }

  async getOne(req, res, next) {
    // Получить запись по
    const id = req.params.id;
    if (isNaN(id)) {
      return next(apiErrors.badRequest("некоректные данные"));
    }
    const [result, metadata] = await db.query(
      `SELECT * FROM publishers WHERE publ_id = $id`,
      { bind: { id } },
      { type: QueryTypes.SELECT }
    );
    if (!result.length) {
      return next(apiErrors.noContent("Такой записи не существует"));
    }
    res.status(200).json(result);
  }

  async addPublishers(req, res) {
    // Добавить запись
    const { name, city } = req.body;

    const [result, metadata] = await db.query(
      `SELECT * FROM publishers WHERE publ_name = $name`,
      { bind: { name } },
      { type: QueryTypes.SELECT }
    );
    if (result.length) {
      res.send("name already exist");
    } else {
      await db.query(
        `INSERT INTO publishers (publ_name,city) VALUES ($name,$city)`,
        { bind: { name, city } },
        { type: QueryTypes.INSERT }
      );
      res.send("Запись создана");
    }
  }

  async removeOne(req, res, next) {
    // Удалить запись
    const id = req.params.id;
    if (isNaN(id)) {
      return next(apiErrors.badRequest("некоректные данные"));
    }
    const [result, metadata] = await db.query(
      `SELECT * FROM publishers WHERE publ_id = $id`,
      { bind: { id } },
      { type: QueryTypes.SELECT }
    );
    if (!result.length) {
      return next(apiErrors.noContent("Такой записи не существует"));
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
    // Обновить запись
    const id = req.params.id;
    const { name, city } = req.body;
    if (isNaN(id)) {
      return next(apiErrors.badRequest("некоректные данные"));
    }
    await db.query(
      "UPDATE publishers SET publ_name = $name, city = $city WHERE publ_id = $id ",
      { bind: { name, city, id } },
      { type: QueryTypes.UPDATE }
    );

    res.status(200).json({ message: "Запись обновлена" });
  }

  async check(req, res, next) {
    const [result, metadata] = await db.query(
      `SELECT COUNT(*) FROM publishers`,
      { type: QueryTypes.SELECT }
    );
    res.status(200).json(result);
  }
}

module.exports = new PublishersController();
