CREATE OR ALTER VIEW UsrContactAgeInDays AS
SELECT
    Id AS UsrId,
    Name AS UsrName,
    BirthDate AS UsrBirthDate,
    DATEDIFF(DAY, BirthDate, GETDATE()) AS UsrAgeDays
FROM Contact;