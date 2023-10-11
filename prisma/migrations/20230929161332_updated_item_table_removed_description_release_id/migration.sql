/*
  Warnings:

  - You are about to drop the column `description` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `releaseId` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_releaseId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "description",
DROP COLUMN "releaseId";

-- AlterTable
ALTER TABLE "ItemStats" ADD COLUMN     "description" TEXT;
