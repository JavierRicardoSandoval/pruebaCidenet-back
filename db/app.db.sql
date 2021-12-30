CREATE TABLE IF NOT EXISTS "employees" (
	"id"	INTEGER NOT NULL,
	"firstName"	TEXT NOT NULL,
	"secondName"	TEXT,
	"firstLastName"	TEXT NOT NULL,
	"secondLastName"	TEXT,
	"email"	TEXT NOT NULL,
	"entryDate"	TEXT NOT NULL,
	"registerDate"	TEXT NOT NULL,
	"state"	TEXT,
	"typeId"	INTEGER NOT NULL,
	"areaId"	INTEGER NOT NULL,
	"countryId"	INTEGER NOT NULL,
	FOREIGN KEY("typeId") REFERENCES "typeIds"("id"),
	FOREIGN KEY("areaId") REFERENCES "areas"("id"),
	FOREIGN KEY("countryId") REFERENCES "countries"("id"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "typeIds" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "countries" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "areas" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "typeIds" VALUES (1,'Cédula de Ciudadanía');
INSERT INTO "typeIds" VALUES (2,'Cédula de Extranjería');
INSERT INTO "typeIds" VALUES (3,'Pasaporte');
INSERT INTO "typeIds" VALUES (4,'Permiso Especial');
INSERT INTO "countries" VALUES (1,'Colombia');
INSERT INTO "countries" VALUES (2,'Estados Unidos de America');
INSERT INTO "areas" VALUES (1,'Administración');
INSERT INTO "areas" VALUES (2,'Financiera');
INSERT INTO "areas" VALUES (3,'Compras');
INSERT INTO "areas" VALUES (4,'Infraestructura');
INSERT INTO "areas" VALUES (5,'Operación');
INSERT INTO "areas" VALUES (6,'Talento Humano');
INSERT INTO "areas" VALUES (7,'Servicios Varios');

