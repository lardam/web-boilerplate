-- CreateTable
CREATE TABLE "Productos" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "categoria" TEXT[],
    "creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contactos" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contactos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curriculums" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "archivo" TEXT NOT NULL,
    "creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curriculums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Legales" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Legales_pkey" PRIMARY KEY ("id")
);
