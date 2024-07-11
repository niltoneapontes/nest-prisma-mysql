/*
  Warnings:

  - Added the required column `birthdate` to the `BubbleTeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `BubbleTeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `BubbleTeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pix` to the `BubbleTeamMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BubbleTeamMember` ADD COLUMN `birthdate` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `pix` VARCHAR(191) NOT NULL;
