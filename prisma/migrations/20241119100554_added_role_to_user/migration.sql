-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('Admin', 'user') NOT NULL DEFAULT 'user';
