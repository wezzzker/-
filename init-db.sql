DROP TABLE IF EXISTS tabletop_games;
DROP TABLE IF EXISTS publishers;


CREATE TABLE publishers 
(
	publ_id serial primary key,
	publ_name varchar(100) NOT NULL,
	city varchar(100) NOT NULL
);

CREATE TABLE tabletop_games
(
	game_id serial primary key,
	game_name varchar(100) NOT NULL,
	fk_publ_id integer references publishers(publ_id) ON DELETE CASCADE NOT NULL
	
);

INSERT INTO publishers (publ_name, city)
VALUES 
('Wizard of the coast', 'LA' ),
('Steve Jackson Games', 'Austin' ),
('Hobby World', 'Москва' ),
('Экономикус', 'Москва' ),
('dV Giochi', 'Penna' ),
('GaGa Games', 'Санкт-Петербург' ),
('Cosmodrome Games', 'Санкт-Петербург' ),
('Magellan', 'Москва' ),
('Paizo', 'Washington' );

INSERT INTO tabletop_games (game_name, fk_publ_id)
VALUES 
('Dungeons&Dragons 5e: Players handbook', 1),
('Magic the gathering', 1),
('Манчкин', 2),
('Взрывные котята', 3),
('Бункер', 4),
('Битва за рокуган', 3),
('Ужас Аркхэма', 3),
('Бэнг!', 5),
('НУАР', 6),
('Codenames', 6),
('Имаджинариум', 7),
('500 злобных карт 3.0', 7),
('Свинтус', 3),
('Зомби в доме. Заражение', 8),
('Шакал', 8),
('Ёрш', 8),
('Dungeons&Dragons 5e: Monster manual', 1),
('Dungeons&Dragons 5e: DM guide', 1),
('Ticket to Ride: Европа', 3),
('Pathfinder', 9);