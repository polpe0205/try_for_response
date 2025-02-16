/*
  Warnings:

  - You are about to drop the `try1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "try1";

-- CreateTable
CREATE TABLE "Usr" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "goal" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "fatherId" INTEGER,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timer" (
    "id" SERIAL NOT NULL,
    "timerStart" INTEGER NOT NULL,
    "timeLeft" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "fatherId" INTEGER,

    CONSTRAINT "Timer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usr_id_key" ON "Usr"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usr_name_key" ON "Usr"("name");

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "Todo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Usr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timer" ADD CONSTRAINT "Timer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Usr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timer" ADD CONSTRAINT "Timer_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "Todo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
