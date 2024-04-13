/*
  Warnings:

  - Added the required column `activo` to the `Productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `local` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "activo" BOOLEAN NOT NULL,
ADD COLUMN     "local" TEXT NOT NULL,
ALTER COLUMN "categoria" SET NOT NULL,
ALTER COLUMN "categoria" SET DATA TYPE TEXT;
