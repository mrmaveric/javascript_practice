#
# Load companies into the Intacept system
#

curl -H "Content-Type: application/json" -d '{"name": "Intacept"}' http://localhost:3000/tables/company
curl -H "Content-Type: application/json" -d '{"name": "BCS"}' http://localhost:3000/tables/company
curl -H "Content-Type: application/json" -d '{"name": "IFX"}' http://localhost:3000/tables/company

#
# Load testers into the Intacept system
#
curl -H "Content-Type: application/json" -d '{"CompanyId": 1, "password": "1234", "surname": "User", "firstname": "Demo", "email": "demo"}' http://localhost:3000/tables/tester
curl -H "Content-Type: application/json" -d '{"CompanyId": 1, "password": "1234", "surname": "Tester", "firstname": "Intacept", "email": "tester@intacept.com.au"}' http://localhost:3000/tables/tester
curl -H "Content-Type: application/json" -d '{"CompanyId": 1, "password": "5678", "surname": "Test", "firstname": "Intacept", "email": "test@intacept.com.au"}' http://localhost:3000/tables/tester

curl -H "Content-Type: application/json" -d '{"CompanyId": 2, "password": "1111", "surname": "Sommer", "firstname": "Steve", "email": "ssommer@bcsinternational.com.au"}' http://localhost:3000/tables/tester
curl -H "Content-Type: application/json" -d '{"CompanyId": 2, "password": "2222", "surname": "Cooper", "firstname": "Peter", "email": "pcooper@bcsinternational.com.au"}' http://localhost:3000/tables/tester
curl -H "Content-Type: application/json" -d '{"CompanyId": 2, "password": "3333", "surname": "Bull", "firstname": "James", "email": "jpjbull@bcsinternational.com.au"}' http://localhost:3000/tables/tester
curl -H "Content-Type: application/json" -d '{"CompanyId": 2, "password": "4444", "surname": "Bull", "firstname": "David", "email": "dbull@bcsinternational.com.au"}' http://localhost:3000/tables/tester
curl -H "Content-Type: application/json" -d '{"CompanyId": 3, "password": "5555", "surname": "McCoull", "firstname": "James", "email": "james@intelligentfx.com"}' http://localhost:3000/tables/tester
curl -H "Content-Type: application/json" -d '{"CompanyId": 2, "password": "6666", "surname": "Meyer", "firstname": "Stephan", "email": "stephan.meyer.oz@gmail.com"}' http://localhost:3000/tables/tester

#
# Load some tags into the Intacept system
#

curl -H "Content-Type: application/json" -d '{"CompanyId": "1"}' http://localhost:3000/tables/tag
curl -H "Content-Type: application/json" -d '{"CompanyId": "1"}' http://localhost:3000/tables/tag
curl -H "Content-Type: application/json" -d '{"CompanyId": "1"}' http://localhost:3000/tables/tag
curl -H "Content-Type: application/json" -d '{"CompanyId": "2"}' http://localhost:3000/tables/tag
curl -H "Content-Type: application/json" -d '{"CompanyId": "2"}' http://localhost:3000/tables/tag
curl -H "Content-Type: application/json" -d '{"CompanyId": "2"}' http://localhost:3000/tables/tag
curl -H "Content-Type: application/json" -d '{"CompanyId": "3"}' http://localhost:3000/tables/tag
curl -H "Content-Type: application/json" -d '{"CompanyId": "3"}' http://localhost:3000/tables/tag
curl -H "Content-Type: application/json" -d '{"CompanyId": "3"}' http://localhost:3000/tables/tag


