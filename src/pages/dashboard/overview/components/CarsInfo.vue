<script setup lang="ts">
const carsInfo = ref([
    {
        carModel: 'Toyota Corolla',
        carType: 'Sedan',
        rentalCost: '$45',
        rentalDuration: '05/15/2023 - 05/20/2023',
        mileage: '500 miles',
    },
    {
        carModel: 'Honda CRV',
        carType: 'SUV',
        rentalCost: '$60',
        rentalDuration: '06/01/2023 - 06/05/2023',
        mileage: '700 miles',
    },
    {
        carModel: 'BMW X5',
        carType: 'Luxury',
        rentalCost: '$120',
        rentalDuration: '07/01/2023 - 07/08/2023',
        mileage: '1000 miles',
    },
    {
        carModel: 'Chevrolet Silverado',
        carType: 'Truck',
        rentalCost: '$80',
        rentalDuration: '08/01/2023 - 08/10/2023',
        mileage: '900 miles',
    },
    {
        carModel: 'Ford Mustang',
        carType: 'Sports',
        rentalCost: '$100',
        rentalDuration: '09/01/2023 - 09/15/2023',
        mileage: '1200 miles',
    },
    {
        carModel: 'Toyota Sienna',
        carType: 'Van',
        rentalCost: '$70',
        rentalDuration: '10/01/2023 - 10/20/2023',
        mileage: '800 miles',
    },
    {
        carModel: 'Toyota Corolla',
        carType: 'Sedan',
        rentalCost: '$45',
        rentalDuration: '05/15/2023 - 05/20/2023',
        mileage: '500 miles',
    },
])
const headers = ref([
    {
        title: 'Car Model',
        align: 'start',
        sortable: false,
        key: 'carModel',
    },
    { title: 'Car Type', key: 'carType' },
    { title: 'Rental Cost', key: 'rentalCost' },
    { title: 'Rental Duration', key: 'rentalDuration' },
    { title: 'Mileage', key: 'mileage' },
])
</script>
<template>
    <v-card :title="$t('dashboard.main.carsInfo')">
        <v-table>
            <thead>
                <tr class="text-sm whitespace-no-wrap">
                    <th v-for="header in headers" :key="header.key" :class="header.align">
                        {{ header.title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="car in carsInfo" :key="car.carModel" class="text-xs">
                    <td>{{ car.carModel }}</td>
                    <td>{{ car.carType }}</td>
                    <td>{{ car.rentalCost }}</td>
                    <td>{{ car.rentalDuration }}</td>
                    <td>{{ car.mileage }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<style scoped></style>
