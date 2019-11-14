SELECT * FROM `paragraphs` WHERE `id` = 1337;

EXPLAIN SELECT * FROM `paragraphs` WHERE `id` = 1337;

SELECT * FROM `words` WHERE `word` = 'kissed';

INSERT INTO `words` (`word`, `count`) VALUES ('february', 10);

SELECT * FROM `paragraphs`
WHERE (`text`) LIKE ('%Edmond Dantès%');

SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('Edmond Dantès');

SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('"Edmond Dantès"');

SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('+Edmond +Dantès' IN BOOLEAN MODE);
