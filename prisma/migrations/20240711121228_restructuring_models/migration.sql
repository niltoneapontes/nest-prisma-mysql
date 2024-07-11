/*
  Warnings:

  - Added the required column `createdAt` to the `BubbleTeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `BubbleTeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Punch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Punch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BubbleTeamMember` ADD COLUMN `createdAt` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Punch` ADD COLUMN `createdAt` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` VARCHAR(191) NOT NULL;
