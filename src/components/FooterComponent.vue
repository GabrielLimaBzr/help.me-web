<template>
    <v-footer dark padless app inset :elevation="2">
        <v-card class="flex" flat tile color="green" :elevation="2">
            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>help.me</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>