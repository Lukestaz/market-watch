CREATE TABLE IF NOT EXISTS decisions (
 identity TEXT PRIMARY KEY,
 decision TEXT NOT NULL CHECK(decision IN ('normal','watch','hide')),
 version INTEGER NOT NULL DEFAULT 1,
 updated_at TEXT NOT NULL
);
