/*
  Warnings:

  - You are about to drop the column `date` on the `Logiciel` table. All the data in the column will be lost.
  - You are about to drop the column `date_achat` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `date_expiration` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `Materiel` table. All the data in the column will be lost.
  - Added the required column `licence` to the `Logiciel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marque` to the `Materiel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantite` to the `Materiel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Logiciel" DROP COLUMN "date",
ADD COLUMN     "licence" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Materiel" DROP COLUMN "date_achat",
DROP COLUMN "date_expiration",
DROP COLUMN "numero",
ADD COLUMN     "marque" TEXT NOT NULL,
ADD COLUMN     "quantite" INTEGER NOT NULL;
