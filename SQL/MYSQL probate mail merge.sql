DELIMITER //
USE EFlatHomes

CREATE PROCEDURE ProbateLeadsGet()

BEGIN

--  SQLINES DEMO *** ateCombined where CaseNo = '2011-PR01045'

create temporary table Decedents
(
    FirstName VARCHAR(500),
    LastName VARCHAR(500),
    Street VARCHAR(50),
    Street2 VARCHAR(50),
    City VARCHAR(50),
    State VARCHAR(50),
    Zip VARCHAR(50),
    CaseNo VARCHAR(50),
    Relation VARCHAR(50)
);

insert into Decedents
select FirstName, LastName, Street, Street2, City, State, Zip, CaseNo, Relation
FROM ProbateCombined
where Relation = 'Decedent' and street <> '';

create temporary table Heirs
(
    FirstName VARCHAR(500),
    LastName VARCHAR(500),
    Street VARCHAR(50),
    Street2 VARCHAR(50),
    City VARCHAR(50),
    State VARCHAR(50),
    Zip VARCHAR(50),
    CaseNo VARCHAR(50),
    Relation VARCHAR(50)
);
insert into Heirs
select FirstName, LastName, Street, Street2, City, State, Zip, CaseNo, Relation
FROM ProbateCombined
where Relation not in ('decedent','creditor','plaintiff','defendant') and street <> '';

create temporary table Reps 
(
    CaseNo VARCHAR(50),
    Name VARCHAR(500),
    Title VARCHAR(50),
    Street VARCHAR(50),
    Street2 VARCHAR(50),
    City VARCHAR(50),
    State VARCHAR(50),
    Zip VARCHAR(50)
);
insert into Reps
select distinct CaseNo, RepName, RepTitle, RepStreet, RepStreet2, RepCity, RepState, RepZip
FROM ProbateCombined
where RepName <> '';


-- SQLINES LICENSE FOR EVALUATION USE ONLY
select
    MAX(d.CaseNo) as CaseNo,
    MAX(d.FirstName) as DecedentFirstName, 
    MAX(d.LastName) as DecedentLastName, 
    MAX(REPLACE(CONCAT(d.Street, ' ', d.Street2, ' ', d.City, ' ', d.State, ' ', d.Zip), '  ', ' ')) as Address,
    MAX(COALESCE(h.FirstName,'')) as HeirFirstName,
    MAX(COALESCE(h.LastName,'')) as HeirLastName,
    REPLACE(CONCAT(h.Street, ' ', h.Street2), '  ', ' ') as HeirAddress,
    REPLACE(CONCAT(h.City, ' ', h.State, ' ', h.Zip), '  ', ' ') as HeirCityStateZip,
    MAX(COALESCE(r.Name, '')) as AttorneyName,
    MAX(REPLACE(CONCAT(r.Street, ' ', r.Street2, ' ', r.City, ' ', r.State, ' ', r.Zip), '  ', ' ')) as AttorneyAddress
from Decedents as d
left join Heirs as h on h.CaseNo = d.CaseNo
left join Reps as r on r.CaseNo = d.CaseNo
group by REPLACE(CONCAT(h.Street, ' ', h.Street2), '  ', ' '), CONCAT(h.City, ' ', h.State, ' ', h.Zip)
order by MAX(d.CaseNo);

--  SQLINES DEMO *** NT ADDRESS IS NULL
END //

DELIMITER ;