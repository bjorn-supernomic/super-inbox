-- Create "cases" table
CREATE TABLE `cases` (
  `id` text NOT NULL,
  `state` text NOT NULL,
  `data` text NOT NULL,
  `created_at` text NOT NULL DEFAULT (datetime('now')),
  `updated_at` text NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (`id`)
);
-- Create "decisions" table
CREATE TABLE `decisions` (
  `seq` integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  `case_id` text NOT NULL,
  `option_index` integer NOT NULL,
  `title` text NOT NULL,
  `decided_at` text NOT NULL DEFAULT (datetime('now')),
  CONSTRAINT `0` FOREIGN KEY (`case_id`) REFERENCES `cases` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
);
