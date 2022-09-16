CREATE DATABASE Complexes;

/* 
 Note that each apartment can have multiple tenants, and each tenant can have multiple apartments.
 //**many to many
 Each apartment belongs to one building,
 //**one to one
 and each building belongs to one complexs
 //**one to one 
 
 /* Requirement: */
/*- Write a SQL query to get a list of tenants who are renting more than one apartment */
const query = `SELECT TenantName FROM Tenants INNER JOIN (SELECT TenantID FROM AptTenants 
 GROUP BY TenantsID HAVING count(*)>1 ) C ON  Tenants.TenantID=C.TenantID`

/* - Write a SQL query to get a list of all buildings and the number of open requests (Requests in which
 status equals 'Open')*/
const query_2 = `SELECT BuildingName, ISNULL(Count, 0) as'Count' FROM Buildings
LEFT JOIN (SELECT Apartments.BuildingID,count(*) as 'Count' FROM Requests INNER JOIN Apartments 
ON Requests.AptID=Apartments.AptID
WHERE Requests.Status = 'Open'
GROUP BY Apartments.BuildingID) ReqCounts
ON ReqCounts.BuildingID=Buildings.BuildingID`

/* - Building #11 is undergoing a major renovation. Implement a query to close all requests from
 apartments in this building. */
const query_3 = `UPDATE Requests SET Status='Closed' WHERE AptID IN FROM Apartments WHERE BuildingID=11)`