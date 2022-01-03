-- CreateTable
CREATE TABLE `HabitTracking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sleepDuration` DOUBLE NULL DEFAULT 0,
    `dailyRoutineDuration` DOUBLE NULL DEFAULT 0,
    `readingDuration` DOUBLE NULL DEFAULT 0,
    `gamesDuration` DOUBLE NULL DEFAULT 0,
    `tvDuration` DOUBLE NULL DEFAULT 0,
    `clientWorkDuration` DOUBLE NULL DEFAULT 0,
    `appWorkDuration` DOUBLE NULL DEFAULT 0,
    `sideProjectsDuration` DOUBLE NULL DEFAULT 0,
    `cookingDuration` DOUBLE NULL DEFAULT 0,
    `eatingDuration` DOUBLE NULL DEFAULT 0,
    `drivingDuration` DOUBLE NULL DEFAULT 0,
    `socialsDuration` DOUBLE NULL DEFAULT 0,
    `exerciseDuration` DOUBLE NULL DEFAULT 0,
    `familyDuration` DOUBLE NULL DEFAULT 0,
    `choresDuration` DOUBLE NULL DEFAULT 0,
    `travelDuration` DOUBLE NULL DEFAULT 0,
    `learningDuration` DOUBLE NULL DEFAULT 0,
    `otherDuration` DOUBLE NULL DEFAULT 0,
    `durationNotes` VARCHAR(191) NULL DEFAULT '',
    `wakeTime` DATETIME(3) NULL,
    `maui` BOOLEAN NULL,
    `morningTeeth` BOOLEAN NULL,
    `eveningTeeth` BOOLEAN NULL,
    `weight` DOUBLE NULL,
    `workTime` DATETIME(3) NULL,
    `exercise` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Food` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `defaultUnitId` INTEGER NOT NULL,
    `defaultQuantity` DOUBLE NOT NULL,
    `defaultPrice` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodUnit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `abbreviation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodUnitConversion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `fromUnitId` INTEGER NOT NULL,
    `toUnitId` INTEGER NOT NULL,
    `multiply` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodMethod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `method` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodRated` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `foodId` INTEGER NOT NULL,
    `unitId` INTEGER NOT NULL,
    `foodMethodId` INTEGER NOT NULL,
    `quantity` DOUBLE NOT NULL,
    `rating` DOUBLE NOT NULL,
    `habitTrackingId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
