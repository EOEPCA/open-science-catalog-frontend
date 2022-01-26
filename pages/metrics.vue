<template>
  <v-container>
    <h1>Metrics page</h1>
    <MetricsTable
      :headers="metricsHeaders"
      :items="metricsItems"
    />
  </v-container>
</template>

<script>
export default {
  name: 'Metrics',
  data () {
    return {
      metricsHeaders: [
        1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
        1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
        2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
        2021, 2022
      ],
      metricsItems: [
        {
          id: 'above_ground_biomass',
          name: 'Above-ground biomass',
          years: [
            2018
          ],
          numberOfRecords: 1
        },
        {
          id: 'aerosols',
          name: 'Aerosols',
          years: [
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021
          ],
          numberOfRecords: 15
        },
        {
          id: 'albedo',
          name: 'Albedo',
          years: [
            2017,
            2018,
            2019,
            2020,
            2021
          ],
          numberOfRecords: 6
        },
        {
          id: 'bathymetry',
          name: 'Bathymetry',
          years: [
            2012,
            2013,
            2014
          ],
          numberOfRecords: 2
        },
        {
          id: 'biomass',
          name: 'Biomass',
          years: [
            2017
          ],
          numberOfRecords: 1
        },
        {
          id: 'carbon_flux',
          name: 'Carbon Flux',
          years: [
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021
          ],
          numberOfRecords: 1
        },
        {
          id: 'clouds',
          name: 'Clouds',
          years: [
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021
          ],
          numberOfRecords: 6
        },
        {
          "id": "fresh_water_fluxes",
          "name": "Fresh water fluxes",
          "years": [2014, 2015, 2016, 2017],
          "numberOfRecords": 1
        },
        {
          "id": "geomagnetic_field",
          "name": "Geomagnetic Field",
          "years": [
            2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
            2020, 2021
          ],
          "numberOfRecords": 15
        },
        {
          "id": "geophysical_correction_regional_tides",
          "name": "Geophysical Correction - regional tides",
          "years": [2014],
          "numberOfRecords": 1
        },
        {
          "id": "geophysical_correction_wet_troposphere",
          "name": "Geophysical Correction - wet troposphere",
          "years": [
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
          ],
          "numberOfRecords": 1
        },
        {
          "id": "glaciers",
          "name": "Glaciers",
          "years": [2010, 2011, 2012, 2013, 2014, 2015, 2016],
          "numberOfRecords": 5
        },
        {
          "id": "ice_sheets_and_ice_shelves",
          "name": "Ice sheets and ice shelves",
          "years": [
            2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
          ],
          "numberOfRecords": 30
        },
        {
          "id": "inorganic_carbon",
          "name": "Inorganic carbon",
          "years": [
            1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
            1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
            2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
          ],
          "numberOfRecords": 2
        },
        {
          "id": "ionospheric_plasma_density",
          "name": "Ionospheric plasma density",
          "years": [
            2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
            2014, 2015, 2016, 2017, 2018, 2019, 2020
          ],
          "numberOfRecords": 1
        },
        {
          "id": "lakes",
          "name": "Lakes",
          "years": [
            2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
            2020, 2021
          ],
          "numberOfRecords": 1
        },
      ]
    }
  },
  head: {
    title: 'Metrics'
  }
}
</script>
