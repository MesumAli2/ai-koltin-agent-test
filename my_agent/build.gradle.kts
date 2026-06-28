plugins {
    kotlin("jvm") version "2.0.21"
    id("com.google.devtools.ksp") version "2.0.21-1.0.28"
    application
}

group = "com.example.agent"
version = "1.0.0"

repositories {
    mavenCentral()
    google()
}

val mainClassName = project.findProperty("mainClass") as String? ?: "com.example.agent.MainKt"

application {
    mainClass.set(mainClassName)
}

dependencies {
    implementation("com.google.adk:google-adk-kotlin-core:0.2.0")
    implementation("com.google.adk:google-adk-kotlin-webserver:0.2.0")
    ksp("com.google.adk:google-adk-kotlin-processor:0.2.0")
}

kotlin {
    jvmToolchain(17)
}

tasks.named<JavaExec>("run") {
    standardInput = System.`in`
}
