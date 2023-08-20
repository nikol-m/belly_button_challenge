---

# Exploring Belly Button Biodiversity through an Interactive Dashboard

## Overview

This undertaking revolves around the creation of an interactive dashboard tailored to the exploration of the Belly Button Biodiversity Dataset. This dataset offers insights into the assortment of microbes that inhabit human navels. A noteworthy revelation from the dataset is the prevalence of a select group of microbial species in over 70% of individuals, while the remaining species appear to be relatively uncommon.

## Key Features

The interactive dashboard boasts the following key visualizations:

1. **Top 10 Microbes Bar Chart:** This horizontal bar chart is equipped with a dropdown menu that facilitates the display of the ten most prevalent Operational Taxonomic Units (OTUs) for a chosen individual.

2. **Microbes Diversity Bubble Chart:** The bubble chart vividly represents the distribution of each sample, capturing the diversity of microbial species in a visually engaging manner.

3. **Washing Frequency Gauge Chart:** The gauge chart succinctly illustrates an individual's weekly washing frequency, providing insights into personal hygiene practices.

4. **Sample Metadata Display:** A designated section is allocated to the exhibition of sample metadata, encompassing demographic information pertaining to the individual.

## Employed Technologies

* **D3.js:** Employed for the purpose of parsing the `samples.json` data and orchestrating dynamic manipulations within the Document Object Model (DOM).
* **Plotly.js:** Instrumental in the crafting of interactive and informative visualizations that seamlessly integrate into the dashboard's interface.
* **Bootstrap:** Leverages the power of responsive design to shape the layout and structure of the dashboard.

## Running the Dashboard

To interact with the dashboard, simply open the `index.html` file using a contemporary web browser. Upon selecting a specific sample from the dropdown menu, all charts will seamlessly update to showcase the pertinent data for the chosen sample.

## Data Origin

The dataset that fuels this project's exploration can be accessed [here](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

---
