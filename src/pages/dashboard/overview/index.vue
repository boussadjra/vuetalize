<template>
    <div class="space-y-4">
        <StatCardOverview />
        <RentalFrequency />
        <v-row>
            <v-col sm="12" lg="7">
                <CarsInfo />
            </v-col>

            <v-col sm="12" lg="5">
                <RentalByType />
            </v-col>
        </v-row>
    </div>
</template>

<route lang="yaml">
meta:
    layout: DashboardLayout
</route>
