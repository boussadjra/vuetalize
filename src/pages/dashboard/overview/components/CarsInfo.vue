<script setup lang="ts">
const { t } = useI18n()

const carsInfo = ref([
    {
        carModel: 'Toyota Corolla',
        carType: 'Sedan',
        rentalCost: '$45',
        rentalDuration: '05/15/2023 - 05/20/2023',
        mileage: '500',
    },
    {
        carModel: 'Honda CRV',
        carType: 'SUV',
        rentalCost: '$60',
        rentalDuration: '06/01/2023 - 06/05/2023',
        mileage: '700',
    },
    {
        carModel: 'BMW X5',
        carType: 'Luxury',
        rentalCost: '$120',
        rentalDuration: '07/01/2023 - 07/08/2023',
        mileage: '1000',
    },
    {
        carModel: 'Chevrolet Silverado',
        carType: 'Truck',
        rentalCost: '$80',
        rentalDuration: '08/01/2023 - 08/10/2023',
        mileage: '900',
    },
    {
        carModel: 'Ford Mustang',
        carType: 'Sports',
        rentalCost: '$100',
        rentalDuration: '09/01/2023 - 09/15/2023',
        mileage: '1200',
    },
    {
        carModel: 'Toyota Sienna',
        carType: 'Van',
        rentalCost: '$70',
        rentalDuration: '10/01/2023 - 10/20/2023',
        mileage: '800',
    },
    {
        carModel: 'Toyota Corolla',
        carType: 'Sedan',
        rentalCost: '$45',
        rentalDuration: '05/15/2023 - 05/20/2023',
        mileage: '500',
    },
])
const headers = computed(() => [
    {
        title: t('dashboard.main.carModel'),
        align: 'start',
        sortable: false,
        key: 'carModel',
    },
    { title: t('dashboard.main.carType'), key: 'carType' },
    { title: t('dashboard.main.rentalCost'), key: 'rentalCost' },
    { title: t('dashboard.main.rentalDuration'), key: 'rentalDuration' },
    { title: t('dashboard.main.mileage'), key: 'mileage' },
])
</script>
<template>
    <v-card :title="t('dashboard.main.carsInfo')">
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
