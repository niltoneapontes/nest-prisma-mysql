-- CreateTable
CREATE TABLE `Punch` (
    `id` VARCHAR(191) NOT NULL,
    `memberId` VARCHAR(191) NOT NULL,
    `memberName` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `datetime` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
