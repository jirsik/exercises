SELECT * FROM `country`;

SELECT * FROM `country` WHERE `population` > 20000000;

SELECT * FROM `country` WHERE `population` > 20000000 ORDER BY `population` DESC;

SELECT * FROM `country` WHERE `population` > 20000000 ORDER BY `population` DESC LIMIT 0, 10;

SELECT * 
FROM `country`
WHERE `population` > 20000000
ORDER BY `population` DESC
LIMIT 10, 20; /* shows 11-30 (skips 10, shows 20)