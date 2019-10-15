INSERT
INTO `region`
(`name`, `slug`)
VALUES
('Eastern Europe', 'eastern-europe');

INSERT
INTO `region`
(`name`, `slug`)
VALUES
('Eastern Europe', 'eastern-europe'),
('Western Euroúe', 'westertn-europe');


INSERT
INTO `region`
(`name`, `slug`)
VALUES
('North America', 'north-america'),
('Central America', 'central-america'),
('South America', 'south-america');

UPDATE `region`
SET `slug` = ?
WHERE `name` = 'Central Africa';