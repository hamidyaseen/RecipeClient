import { Injectable } from '@angular/core';
import { MarkedRecipe } from './recipes/MarkedRecipe'

@Injectable({
  providedIn: 'root'
})
export class RecipeJsonService {

  public hits: MarkedRecipe[] = HITS;
  constructor() { }
}

export const HITS = [
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b20fa9f83bd504ac16b8da46256eb772",
      "label": "Dinner Tonight: Butter Butter Salad",
      "image": "https://www.edamam.com/web-img/456/456c2de9092f4f49f819db113740ee2c.jpg",
      "source": "Serious Eats",
      "url": "http://www.seriouseats.com/recipes/2008/01/dinner-tonight-butter-butter-salad.html",
      "shareAs": "http://www.edamam.com/recipe/dinner-tonight-butter-butter-salad-b20fa9f83bd504ac16b8da46256eb772/butter",
      "yield": 2.0,
      "dietLabels": [
        "Low-Carb"
      ],
      "healthLabels": [
        "Sugar-Conscious",
        "Vegetarian",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Alcohol-Free",
        "Immuno-Supportive"
      ],
      "cautions": [
        "Sulfites"
      ],
      "ingredientLines": [
        "1/4 cup butter",
        "1 head of butterhead lettuce",
        "1 tablespoon lemon juice",
        "Salt and pepper"
      ],
      "ingredients": [
        {
          "text": "1/4 cup butter",
          "weight": 56.75,
          "image": null
        },
        {
          "text": "1 head of butterhead lettuce",
          "weight": 163.0,
          "image": "https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg"
        },
        {
          "text": "1 tablespoon lemon juice",
          "weight": 15.2499999997422,
          "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
        },
        {
          "text": "Salt and pepper",
          "weight": 1.4099999999984534,
          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
        },
        {
          "text": "Salt and pepper",
          "weight": 0.7049999999992267,
          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
        }
      ],
      "calories": 433.2120499999413,
      "totalWeight": 237.0813384676691,
      "totalTime": 0.0,
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 433.2120499999413,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 46.44810799999936,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 29.21452359999989,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 1.860265,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 11.94858244999998,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 1.927850899999938,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 5.172047499981717,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 2.0171149999990314,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 1.9550619999934984,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 2.8094994999990175,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 122.0125,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 548.1272633993985,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 75.03847123228374,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 24.459313384662487,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 426.7470570771585,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 2.1177474169438804,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 0.3944658384677896,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 69.74389999997817,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 658.9403499999997,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 11.932749999900231,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.1001688999999373,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 0.12391149999995996,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.6276806499997567,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.14442904999987918,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 123.86234999994832,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 123.86234999994832,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 0.096475,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 0.8512500000000001,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 1.6402069999996052,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 171.87558499999872,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 180.22572067669776,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 21.660602499997065,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 71.4586276923067,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 146.07261799999944,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 1.7240158333272393,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 8.068459999996126,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 5.618998999998036,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 40.670833333333334,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 22.838635974974938,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 7.503847123228374,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 5.823646043967258,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 9.079724618662947,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 11.765263427466003,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 3.5860530769799053,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 9.963414285711167,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 73.21559444444442,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 13.258611111000258,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 8.34740833332811,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 9.531653846150766,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 3.9230040624984794,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 11.10992692306763,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 30.96558749998708,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 4.019791666666667,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 5.675,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 10.934713333330702,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 143.2296541666656,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 46.44810799999936,
          "hasRDI": true,
          "daily": 71.4586276923067,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 29.21452359999989,
              "hasRDI": true,
              "daily": 146.07261799999944,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 1.860265,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 11.94858244999998,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 1.927850899999938,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 5.172047499981717,
          "hasRDI": true,
          "daily": 1.7240158333272393,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 3.154932499982686,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 2.0171149999990314,
              "hasRDI": true,
              "daily": 8.068459999996126,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 1.9550619999934984,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 2.8094994999990175,
          "hasRDI": true,
          "daily": 5.618998999998036,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 122.0125,
          "hasRDI": true,
          "daily": 40.670833333333334,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 548.1272633993985,
          "hasRDI": true,
          "daily": 22.838635974974938,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 75.03847123228374,
          "hasRDI": true,
          "daily": 7.503847123228374,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 24.459313384662487,
          "hasRDI": true,
          "daily": 5.823646043967258,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 426.7470570771585,
          "hasRDI": true,
          "daily": 9.079724618662947,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 2.1177474169438804,
          "hasRDI": true,
          "daily": 11.765263427466003,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 0.3944658384677896,
          "hasRDI": true,
          "daily": 3.5860530769799053,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 69.74389999997817,
          "hasRDI": true,
          "daily": 9.963414285711167,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 658.9403499999997,
          "hasRDI": true,
          "daily": 73.21559444444442,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 11.932749999900231,
          "hasRDI": true,
          "daily": 13.258611111000258,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 0.1001688999999373,
          "hasRDI": true,
          "daily": 8.34740833332811,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 0.12391149999995996,
          "hasRDI": true,
          "daily": 9.531653846150766,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 0.6276806499997567,
          "hasRDI": true,
          "daily": 3.9230040624984794,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.14442904999987918,
          "hasRDI": true,
          "daily": 11.10992692306763,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 123.86234999994832,
          "hasRDI": true,
          "daily": 30.96558749998708,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 123.86234999994832,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 0.096475,
          "hasRDI": true,
          "daily": 4.019791666666667,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 0.8512500000000001,
          "hasRDI": true,
          "daily": 5.675,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 1.6402069999996052,
          "hasRDI": true,
          "daily": 10.934713333330702,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 171.87558499999872,
          "hasRDI": true,
          "daily": 143.2296541666656,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 180.22572067669776,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "bookmarked": false,
    "bought": false
  },
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c8bab6ca85024439d394d9b0e97cfdad",
      "label": "Raspberry Butter",
      "image": "https://www.edamam.com/web-img/d21/d21cc71c16673e0a84b8d0e207c2fa68.jpg",
      "source": "Food52",
      "url": "https://food52.com/recipes/13134-raspberry-butter",
      "shareAs": "http://www.edamam.com/recipe/raspberry-butter-c8bab6ca85024439d394d9b0e97cfdad/butter",
      "yield": 6.0,
      "dietLabels": [
        "Low-Carb"
      ],
      "healthLabels": [
        "Vegetarian",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Alcohol-Free"
      ],
      "cautions": [
        "Sulfites"
      ],
      "ingredientLines": [
        "1/4 pound butter, softened",
        "2 1/2 tablespoons powdered sugar",
        "1/2 cup fresh raspberries"
      ],
      "ingredients": [
        {
          "text": "1/4 pound butter, softened",
          "weight": 113.3980925,
          "image": null
        },
        {
          "text": "2 1/2 tablespoons powdered sugar",
          "weight": 20.0,
          "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
        },
        {
          "text": "1/2 cup fresh raspberries",
          "weight": 61.5,
          "image": "https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg"
        }
      ],
      "calories": 922.8443232250002,
      "totalWeight": 194.89809250000002,
      "totalTime": 79.0,
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 922.8443232250002,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 92.37694282675001,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 58.26201715540001,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 3.7171894721500003,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 23.876773024425002,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 3.6813289547750006,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 27.3651388555,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 3.9975,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 22.3483388555,
          "unit": "g"
        },
        "SUGAR.added": {
          "label": "Sugars, added",
          "quantity": 19.562,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 1.70188378625,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 243.80589887500003,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 13.488790175000002,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 42.790542200000004,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 15.79796185,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 120.4805422,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 0.45902961849999996,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 0.36235828324999997,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 45.0505422,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 776.8729527000002,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 16.113,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.025349904625,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 0.06572535145,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.41539719885,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.037226942775,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 16.316942775,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 16.316942775,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 0.19277675725000004,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 1.7009713875,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 3.1658857460000003,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 12.734866475,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 73.12586779450001,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 46.142216161250005,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 142.11837357961542,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 291.31008577700004,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 9.121712951833333,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 15.99,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 3.4037675725,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 81.26863295833334,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 0.5620329239583334,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 4.27905422,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 3.761419488095238,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 2.5634157914893616,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 2.550164547222222,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 3.2941662113636365,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 6.435791742857143,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 86.31921696666669,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 17.903333333333332,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 2.1124920520833332,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 5.055796265384615,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 2.5962324928125,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 2.8636109826923075,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 4.07923569375,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 8.03236488541667,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 11.33980925,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 21.105904973333335,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 10.612388729166668,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 92.37694282675001,
          "hasRDI": true,
          "daily": 142.11837357961542,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 58.26201715540001,
              "hasRDI": true,
              "daily": 291.31008577700004,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 3.7171894721500003,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 23.876773024425002,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 3.6813289547750006,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 27.3651388555,
          "hasRDI": true,
          "daily": 9.121712951833333,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 23.3676388555,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 3.9975,
              "hasRDI": true,
              "daily": 15.99,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 22.3483388555,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 19.562,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 1.70188378625,
          "hasRDI": true,
          "daily": 3.4037675725,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 243.80589887500003,
          "hasRDI": true,
          "daily": 81.26863295833334,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 13.488790175000002,
          "hasRDI": true,
          "daily": 0.5620329239583334,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 42.790542200000004,
          "hasRDI": true,
          "daily": 4.27905422,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 15.79796185,
          "hasRDI": true,
          "daily": 3.761419488095238,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 120.4805422,
          "hasRDI": true,
          "daily": 2.5634157914893616,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 0.45902961849999996,
          "hasRDI": true,
          "daily": 2.550164547222222,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 0.36235828324999997,
          "hasRDI": true,
          "daily": 3.2941662113636365,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 45.0505422,
          "hasRDI": true,
          "daily": 6.435791742857143,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 776.8729527000002,
          "hasRDI": true,
          "daily": 86.31921696666669,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 16.113,
          "hasRDI": true,
          "daily": 17.903333333333332,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 0.025349904625,
          "hasRDI": true,
          "daily": 2.1124920520833332,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 0.06572535145,
          "hasRDI": true,
          "daily": 5.055796265384615,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 0.41539719885,
          "hasRDI": true,
          "daily": 2.5962324928125,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.037226942775,
          "hasRDI": true,
          "daily": 2.8636109826923075,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 16.316942775,
          "hasRDI": true,
          "daily": 4.07923569375,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 16.316942775,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 0.19277675725000004,
          "hasRDI": true,
          "daily": 8.03236488541667,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 1.7009713875,
          "hasRDI": true,
          "daily": 11.33980925,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 3.1658857460000003,
          "hasRDI": true,
          "daily": 21.105904973333335,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 12.734866475,
          "hasRDI": true,
          "daily": 10.612388729166668,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 73.12586779450001,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "bookmarked": false,
    "bought": false
  },
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5a4b121c6f79d0b67830ffab79e7f0f0",
      "label": "Shrimp Butter",
      "image": "https://www.edamam.com/web-img/55c/55ce7f5c5b1f76521b991f63b8300cc5.jpg",
      "source": "Epicurious",
      "url": "https://www.epicurious.com/recipes/food/views/shrimp-butter-365796",
      "shareAs": "http://www.edamam.com/recipe/shrimp-butter-5a4b121c6f79d0b67830ffab79e7f0f0/butter",
      "yield": 10.0,
      "dietLabels": [
        "Low-Carb"
      ],
      "healthLabels": [
        "Sugar-Conscious",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Alcohol-Free"
      ],
      "cautions": [],
      "ingredientLines": [
        "1 chopped onion",
        "2 garlic cloves, minced",
        "1 sprig fresh thyme",
        "1 tablespoon unsalted butter",
        "1 pound shell-on shrimp",
        "2 sticks butter, softened",
        "kosher salt and freshly ground black pepper"
      ],
      "ingredients": [
        {
          "text": "1 chopped onion",
          "weight": 125.0,
          "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
        },
        {
          "text": "2 garlic cloves, minced",
          "weight": 6.0,
          "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
        },
        {
          "text": "1 sprig fresh thyme",
          "weight": 3.0,
          "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
        },
        {
          "text": "1 tablespoon unsalted butter",
          "weight": 14.2,
          "image": null
        },
        {
          "text": "1 pound shell-on shrimp",
          "weight": 453.59237,
          "image": "https://www.edamam.com/food-img/ebe/ebe2888b894f48d19762e1d606db0206.jpg"
        },
        {
          "text": "2 sticks butter, softened",
          "weight": 226.0,
          "image": null
        },
        {
          "text": "kosher salt and freshly ground black pepper",
          "weight": 4.96675422,
          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
        },
        {
          "text": "kosher salt and freshly ground black pepper",
          "weight": 2.48337711,
          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
        }
      ],
      "calories": 2112.4878592461005,
      "totalWeight": 830.27574711,
      "totalTime": 0.0,
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 2112.4878592461005,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 199.693861030786,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 124.67623069507121,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 7.955402626600001,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 51.35113634654291,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 8.7243175950578,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 20.252030228845,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 3.29929440883,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 5.520013613504,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 65.95704443872901,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 1087.9563862,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 2600.5414896220004,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 365.34924039730004,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 127.64089625810001,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 828.0414598919001,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 2.1297198943809996,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 4.981978176609,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 1216.9471186338003,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 1895.7183916197002,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 15.925,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.1763505212788,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 0.20865693429800003,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 8.4358613389673,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.9792563430901001,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 119.09072440870003,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 119.09072440870003,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 5.443215307000001,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 4.056592370000001,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 11.615686405944,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 22.84206543907,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 536.7839351249061,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 105.62439296230502,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 307.2213246627477,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 623.3811534753561,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 6.750676742948333,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 13.19717763532,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 131.91408887745803,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 362.6521287333333,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 108.35589540091668,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 36.53492403973,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 30.39068958526191,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 17.617903401955324,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 11.831777191005553,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 45.29071069644545,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 173.84958837625717,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 210.63537684663333,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 17.694444444444443,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 14.695876773233332,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 16.050533407538463,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 52.72413336854562,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 75.32741100693077,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 29.772681102175007,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 226.8006377916667,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 27.04394913333334,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 77.43790937296,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 19.035054532558334,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 199.693861030786,
          "hasRDI": true,
          "daily": 307.2213246627477,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 124.67623069507121,
              "hasRDI": true,
              "daily": 623.3811534753561,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 7.955402626600001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 51.35113634654291,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 8.7243175950578,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 20.252030228845,
          "hasRDI": true,
          "daily": 6.750676742948333,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 16.952735820015,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 3.29929440883,
              "hasRDI": true,
              "daily": 13.19717763532,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 5.520013613504,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 65.95704443872901,
          "hasRDI": true,
          "daily": 131.91408887745803,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 1087.9563862,
          "hasRDI": true,
          "daily": 362.6521287333333,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 2600.5414896220004,
          "hasRDI": true,
          "daily": 108.35589540091668,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 365.34924039730004,
          "hasRDI": true,
          "daily": 36.53492403973,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 127.64089625810001,
          "hasRDI": true,
          "daily": 30.39068958526191,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 828.0414598919001,
          "hasRDI": true,
          "daily": 17.617903401955324,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 2.1297198943809996,
          "hasRDI": true,
          "daily": 11.831777191005553,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 4.981978176609,
          "hasRDI": true,
          "daily": 45.29071069644545,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 1216.9471186338003,
          "hasRDI": true,
          "daily": 173.84958837625717,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 1895.7183916197002,
          "hasRDI": true,
          "daily": 210.63537684663333,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 15.925,
          "hasRDI": true,
          "daily": 17.694444444444443,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 0.1763505212788,
          "hasRDI": true,
          "daily": 14.695876773233332,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 0.20865693429800003,
          "hasRDI": true,
          "daily": 16.050533407538463,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 8.4358613389673,
          "hasRDI": true,
          "daily": 52.72413336854562,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.9792563430901001,
          "hasRDI": true,
          "daily": 75.32741100693077,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 119.09072440870003,
          "hasRDI": true,
          "daily": 29.772681102175007,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 119.09072440870003,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 5.443215307000001,
          "hasRDI": true,
          "daily": 226.8006377916667,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 4.056592370000001,
          "hasRDI": true,
          "daily": 27.04394913333334,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 11.615686405944,
          "hasRDI": true,
          "daily": 77.43790937296,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 22.84206543907,
          "hasRDI": true,
          "daily": 19.035054532558334,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 536.7839351249061,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "bookmarked": false,
    "bought": false
  },
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_96ef9ccb925c31ece5f583735e1e4782",
      "label": "Brandy Butter",
      "image": "https://www.edamam.com/web-img/37e/37e9ef6d250b26f27fb63bf087e5f1ec.jpg",
      "source": "Saveur",
      "url": "http://www.saveur.com/article/Recipes/Brandy-Butter",
      "shareAs": "http://www.edamam.com/recipe/brandy-butter-96ef9ccb925c31ece5f583735e1e4782/butter",
      "yield": 8.0,
      "dietLabels": [],
      "healthLabels": [
        "Vegetarian",
        "Peanut-Free",
        "Tree-Nut-Free"
      ],
      "cautions": [],
      "ingredientLines": [
        "12 tbsp. room-temperature unsalted butter",
        "3/4 cup sugar",
        "4 tbsp. brandy"
      ],
      "ingredients": [
        {
          "text": "12 tbsp. room-temperature unsalted butter",
          "weight": 170.39999999999998,
          "image": null
        },
        {
          "text": "3/4 cup sugar",
          "weight": 150.0,
          "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
        },
        {
          "text": "4 tbsp. brandy",
          "weight": 55.9999999987376,
          "image": "https://www.edamam.com/food-img/1d7/1d785da8ce8dca92df262103058b05d1.jpg"
        }
      ],
      "calories": 1931.6279999970836,
      "totalWeight": 376.3999999987376,
      "totalTime": 0.0,
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 1931.6279999970836,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 138.21143999999998,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 87.531072,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 5.585711999999999,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 35.819784,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 5.185271999999999,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 150.07224,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 149.80223999999998,
          "unit": "g"
        },
        "SUGAR.added": {
          "label": "Sugars, added",
          "quantity": 149.7,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 1.4483999999999997,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 366.35999999999996,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 20.803999999987372,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 42.395999999999994,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 3.4079999999999995,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 45.015999999974746,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 0.13147999999949506,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 0.190759999999495,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 43.1359999999495,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 1165.5359999999998,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.011879999999924255,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 0.08867599999994949,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.07884799999983588,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.0056719999999873755,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 5.111999999999999,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 5.111999999999999,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 0.28968,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 2.5559999999999996,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 3.953279999999999,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 11.927999999999997,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 67.89575999915924,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 96.58139999985418,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 212.6329846153846,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 437.6553599999999,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 50.02408,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 2.8967999999999994,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 122.11999999999998,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 0.8668333333328072,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 4.239599999999999,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 0.8114285714285713,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 0.9577872340420159,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 0.7304444444416391,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 1.734181818177227,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 6.1622857142785,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 129.50399999999996,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.989999999993688,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 6.821230769226884,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.4927999999989743,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.43630769230672123,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 1.2779999999999998,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 12.07,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 17.04,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 26.355199999999993,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 9.939999999999998,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 138.21143999999998,
          "hasRDI": true,
          "daily": 212.6329846153846,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 87.531072,
              "hasRDI": true,
              "daily": 437.6553599999999,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 5.585711999999999,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 35.819784,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 5.185271999999999,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 150.07224,
          "hasRDI": true,
          "daily": 50.02408,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 150.07224,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 149.80223999999998,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 149.7,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 1.4483999999999997,
          "hasRDI": true,
          "daily": 2.8967999999999994,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 366.35999999999996,
          "hasRDI": true,
          "daily": 122.11999999999998,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 20.803999999987372,
          "hasRDI": true,
          "daily": 0.8668333333328072,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 42.395999999999994,
          "hasRDI": true,
          "daily": 4.239599999999999,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 3.4079999999999995,
          "hasRDI": true,
          "daily": 0.8114285714285713,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 45.015999999974746,
          "hasRDI": true,
          "daily": 0.9577872340420159,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 0.13147999999949506,
          "hasRDI": true,
          "daily": 0.7304444444416391,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 0.190759999999495,
          "hasRDI": true,
          "daily": 1.734181818177227,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 43.1359999999495,
          "hasRDI": true,
          "daily": 6.1622857142785,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 1165.5359999999998,
          "hasRDI": true,
          "daily": 129.50399999999996,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": true,
          "daily": 0.0,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 0.011879999999924255,
          "hasRDI": true,
          "daily": 0.989999999993688,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 0.08867599999994949,
          "hasRDI": true,
          "daily": 6.821230769226884,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 0.07884799999983588,
          "hasRDI": true,
          "daily": 0.4927999999989743,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.0056719999999873755,
          "hasRDI": true,
          "daily": 0.43630769230672123,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 5.111999999999999,
          "hasRDI": true,
          "daily": 1.2779999999999998,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 5.111999999999999,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 0.28968,
          "hasRDI": true,
          "daily": 12.07,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 2.5559999999999996,
          "hasRDI": true,
          "daily": 17.04,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 3.953279999999999,
          "hasRDI": true,
          "daily": 26.355199999999993,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 11.927999999999997,
          "hasRDI": true,
          "daily": 9.939999999999998,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 67.89575999915924,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "bookmarked": false,
    "bought": false
  },
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_9130b37b1dbebf8fb83ee954b84b5e05",
      "label": "Christmas butter",
      "image": "https://www.edamam.com/web-img/9bb/9bb51dc7366b37be0dec815bc81b789e.jpg",
      "source": "Jamie Oliver",
      "url": "http://www.jamieoliver.com/recipes/fruit-recipes/christmas-butter/",
      "shareAs": "http://www.edamam.com/recipe/christmas-butter-9130b37b1dbebf8fb83ee954b84b5e05/butter",
      "yield": 10.0,
      "dietLabels": [
        "Low-Carb"
      ],
      "healthLabels": [
        "Vegetarian",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Alcohol-Free"
      ],
      "cautions": [
        "Sulfites",
        "FODMAP"
      ],
      "ingredientLines": [
        "1 x 250 g pack of butter",
        "75 g dried cranberries , really finely chopped",
        "4 sprigs of fresh rosemary , leaves picked",
        "freshly ground black pepper",
        "sea salt",
        "1 clementine"
      ],
      "ingredients": [
        {
          "text": "1 x 250 g pack of butter",
          "weight": 250.0,
          "image": null
        },
        {
          "text": "75 g dried cranberries , really finely chopped",
          "weight": 75.0,
          "image": "https://www.edamam.com/food-img/8aa/8aa3935a527394e1568079a489759221.jpg"
        },
        {
          "text": "4 sprigs of fresh rosemary , leaves picked",
          "weight": 20.0,
          "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
        },
        {
          "text": "freshly ground black pepper",
          "weight": 1.2570000000000001,
          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
        },
        {
          "text": "sea salt",
          "weight": 2.5140000000000002,
          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
        },
        {
          "text": "1 clementine",
          "weight": 74.0,
          "image": "https://www.edamam.com/food-img/4b0/4b0e7d9985b55a58513f61cd02a5003c.jpg"
        }
      ],
      "calories": 2087.63507,
      "totalWeight": 422.6858091448475,
      "totalTime": 25.0,
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 2087.63507,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 205.1264782,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 129.08234744,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 8.195,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 52.94228923,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 8.293744859999999,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 75.75865149999998,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 8.671021,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 55.7012448,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 3.5991023,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 537.5,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 977.29924836,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 159.2514241947634,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 36.52375809144848,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 371.4798347315878,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 2.011169770177997,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 0.5552871091448476,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 96.72605999999999,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 1739.5393900000001,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 40.62199999999999,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.08994755999999998,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 0.15186260000000001,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 1.51490751,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.16235787000000002,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 47.27369,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 47.27369,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 0.42500000000000004,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 3.75,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 6.7635727999999995,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 22.407709,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 134.63467981828967,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 104.38175349999999,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 315.57919723076924,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 645.4117372000001,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 25.25288383333333,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 34.684084,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 7.1982046,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 179.16666666666666,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 40.720802015,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 15.92514241947634,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 8.696132878916304,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 7.9038262708848475,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 11.173165389877761,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 5.048064628589523,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 13.818008571428571,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 193.28215444444447,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 45.13555555555555,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 7.495629999999999,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 11.681738461538462,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 9.4681719375,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 12.489066923076924,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 11.818422500000002,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 17.708333333333336,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 25.0,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 45.090485333333326,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 18.673090833333333,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 205.1264782,
          "hasRDI": true,
          "daily": 315.57919723076924,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 129.08234744,
              "hasRDI": true,
              "daily": 645.4117372000001,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 8.195,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 52.94228923,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 8.293744859999999,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 75.75865149999998,
          "hasRDI": true,
          "daily": 25.25288383333333,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 67.08763049999999,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 8.671021,
              "hasRDI": true,
              "daily": 34.684084,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 55.7012448,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 3.5991023,
          "hasRDI": true,
          "daily": 7.1982046,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 537.5,
          "hasRDI": true,
          "daily": 179.16666666666666,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 977.29924836,
          "hasRDI": true,
          "daily": 40.720802015,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 159.2514241947634,
          "hasRDI": true,
          "daily": 15.92514241947634,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 36.52375809144848,
          "hasRDI": true,
          "daily": 8.696132878916304,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 371.4798347315878,
          "hasRDI": true,
          "daily": 7.9038262708848475,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 2.011169770177997,
          "hasRDI": true,
          "daily": 11.173165389877761,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 0.5552871091448476,
          "hasRDI": true,
          "daily": 5.048064628589523,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 96.72605999999999,
          "hasRDI": true,
          "daily": 13.818008571428571,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 1739.5393900000001,
          "hasRDI": true,
          "daily": 193.28215444444447,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 40.62199999999999,
          "hasRDI": true,
          "daily": 45.13555555555555,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 0.08994755999999998,
          "hasRDI": true,
          "daily": 7.495629999999999,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 0.15186260000000001,
          "hasRDI": true,
          "daily": 11.681738461538462,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 1.51490751,
          "hasRDI": true,
          "daily": 9.4681719375,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.16235787000000002,
          "hasRDI": true,
          "daily": 12.489066923076924,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 47.27369,
          "hasRDI": true,
          "daily": 11.818422500000002,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 47.27369,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 0.42500000000000004,
          "hasRDI": true,
          "daily": 17.708333333333336,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 3.75,
          "hasRDI": true,
          "daily": 25.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 6.7635727999999995,
          "hasRDI": true,
          "daily": 45.090485333333326,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 22.407709,
          "hasRDI": true,
          "daily": 18.673090833333333,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 134.63467981828967,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "bookmarked": false,
    "bought": false
  },
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_82978335e22941c8ae896d91a83890e0",
      "label": "Brandy Butter",
      "image": "https://www.edamam.com/web-img/077/077faad5f380b60866d74fe64824a72a.jpg",
      "source": "Martha Stewart",
      "url": "https://www.marthastewart.com/1142697/brandy-butter",
      "shareAs": "http://www.edamam.com/recipe/brandy-butter-82978335e22941c8ae896d91a83890e0/butter",
      "yield": 4.0,
      "dietLabels": [],
      "healthLabels": [
        "Vegetarian",
        "Peanut-Free",
        "Tree-Nut-Free"
      ],
      "cautions": [],
      "ingredientLines": [
        "1/4 cup (1/2 stick) unsalted butter, softened",
        "1/2 cup packed light-brown sugar",
        "3 tablespoons good-quality brandy"
      ],
      "ingredients": [
        {
          "text": "1/4 cup (1/2 stick) unsalted butter, softened",
          "weight": 56.75,
          "image": null
        },
        {
          "text": "1/2 cup packed light-brown sugar",
          "weight": 110.0,
          "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
        },
        {
          "text": "3 tablespoons good-quality brandy",
          "weight": 41.9999999990532,
          "image": "https://www.edamam.com/food-img/1d7/1d785da8ce8dca92df262103058b05d1.jpg"
        }
      ],
      "calories": 921.9174999978129,
      "totalWeight": 208.74999999905322,
      "totalTime": 0.0,
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 921.9174999978129,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 46.029925,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 29.15134,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 1.860265,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 11.929417500000001,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 1.7269025,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 107.93305000000001,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 106.75605,
          "unit": "g"
        },
        "SUGAR.added": {
          "label": "Sugars, added",
          "quantity": 106.72200000000001,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 0.614375,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 122.0125,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 37.462499999990534,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 104.92000000000002,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 11.035,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 160.7599999999811,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 0.8091499999996212,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 0.10087499999962128,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 19.69999999996213,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 388.17,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.005357499999943192,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 0.02097499999996213,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.15029499999987694,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.04722249999999054,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 2.8025,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 2.8025,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 0.096475,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 0.8512500000000001,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 1.3166,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 3.9725,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 39.62694999936943,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 46.09587499989064,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 70.81526923076923,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 145.7567,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 35.97768333333333,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 1.22875,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 40.670833333333334,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 1.5609374999996055,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 10.492000000000003,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 2.6273809523809524,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 3.420425531914491,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 4.495277777775673,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 0.9170454545420117,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 2.8142857142803046,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 43.13,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.4464583333285994,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 1.6134615384586253,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.9393437499992309,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 3.632499999999272,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 0.700625,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 4.019791666666667,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 5.675,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 8.777333333333333,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 3.310416666666667,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 46.029925,
          "hasRDI": true,
          "daily": 70.81526923076923,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 29.15134,
              "hasRDI": true,
              "daily": 145.7567,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 1.860265,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 11.929417500000001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 1.7269025,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 107.93305000000001,
          "hasRDI": true,
          "daily": 35.97768333333333,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 107.93305000000001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 106.75605,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 106.72200000000001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 0.614375,
          "hasRDI": true,
          "daily": 1.22875,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 122.0125,
          "hasRDI": true,
          "daily": 40.670833333333334,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 37.462499999990534,
          "hasRDI": true,
          "daily": 1.5609374999996055,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 104.92000000000002,
          "hasRDI": true,
          "daily": 10.492000000000003,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 11.035,
          "hasRDI": true,
          "daily": 2.6273809523809524,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 160.7599999999811,
          "hasRDI": true,
          "daily": 3.420425531914491,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 0.8091499999996212,
          "hasRDI": true,
          "daily": 4.495277777775673,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 0.10087499999962128,
          "hasRDI": true,
          "daily": 0.9170454545420117,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 19.69999999996213,
          "hasRDI": true,
          "daily": 2.8142857142803046,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 388.17,
          "hasRDI": true,
          "daily": 43.13,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": true,
          "daily": 0.0,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 0.005357499999943192,
          "hasRDI": true,
          "daily": 0.4464583333285994,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 0.02097499999996213,
          "hasRDI": true,
          "daily": 1.6134615384586253,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 0.15029499999987694,
          "hasRDI": true,
          "daily": 0.9393437499992309,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.04722249999999054,
          "hasRDI": true,
          "daily": 3.632499999999272,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 2.8025,
          "hasRDI": true,
          "daily": 0.700625,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 2.8025,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 0.096475,
          "hasRDI": true,
          "daily": 4.019791666666667,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 0.8512500000000001,
          "hasRDI": true,
          "daily": 5.675,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 1.3166,
          "hasRDI": true,
          "daily": 8.777333333333333,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 3.9725,
          "hasRDI": true,
          "daily": 3.310416666666667,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 39.62694999936943,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "bookmarked": false,
    "bought": false
  },
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e56a5c344efd8d62b2eee554a645bbcc",
      "label": "Maple Butter",
      "image": "https://www.edamam.com/web-img/a4b/a4b1b18c82b20ab6531c279ef58ede3e.jpg",
      "source": "Fine Cooking",
      "url": "http://www.finecooking.com/recipes/maple-butter.aspx?ac=fp",
      "shareAs": "http://www.edamam.com/recipe/maple-butter-e56a5c344efd8d62b2eee554a645bbcc/butter",
      "yield": 10.0,
      "dietLabels": [],
      "healthLabels": [
        "Vegetarian",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Alcohol-Free"
      ],
      "cautions": [],
      "ingredientLines": [
        "1/2 lb. unsalted butter, cut into chunks and frozen",
        "1/4 tsp. kosher salt",
        "1-1/2 cups grade A medium maple syrup"
      ],
      "ingredients": [
        {
          "text": "1/2 lb. unsalted butter, cut into chunks and frozen",
          "weight": 226.796185,
          "image": null
        },
        {
          "text": "1/4 tsp. kosher salt",
          "weight": 1.2135416667282188,
          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
        },
        {
          "text": "1-1/2 cups grade A medium maple syrup",
          "weight": 472.5,
          "image": "https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg"
        }
      ],
      "calories": 2854.6286464500004,
      "totalWeight": 700.5097266667283,
      "totalTime": 0.0,
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 2854.6286464500004,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 184.23788565350003,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 116.53373931080002,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 7.434378944300001,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 47.72680104885001,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 6.981732909550002,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 316.90007771100005,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 285.80957771100003,
          "unit": "g"
        },
        "SUGAR.added": {
          "label": "Sugars, added",
          "quantity": 285.67350000000005,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 2.1167675725,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 487.61179775000005,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 551.9920595405231,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 536.6723344000148,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 103.7730591166673,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 1056.2281677333385,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 0.5691139245002031,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 7.151080108166728,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 63.881084400000006,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 1551.2859054000003,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.32318980925000007,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 6.077860702900001,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.4779793977000001,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.016253885550000003,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 6.80388555,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 6.80388555,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 0.3855535145000001,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 3.401942775,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 5.2616714920000005,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 15.875732950000002,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 193.73241267233348,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 142.7314323225,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 283.4429010053846,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 582.668696554,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 105.63335923700002,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 4.233535145,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 162.53726591666668,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 22.999669147521796,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 53.66723344000149,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 24.70787121825412,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 22.472939739007202,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 3.161744025001129,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 65.00981916515208,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 9.125869200000002,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 172.36510060000003,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 26.932484104166672,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 467.5277463769231,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 2.9873712356250004,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 1.2502988884615387,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 1.7009713875,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 16.06472977083334,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 22.6796185,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 35.07780994666667,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 13.229777458333334,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 184.23788565350003,
          "hasRDI": true,
          "daily": 283.4429010053846,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 116.53373931080002,
              "hasRDI": true,
              "daily": 582.668696554,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 7.434378944300001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 47.72680104885001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 6.981732909550002,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 316.90007771100005,
          "hasRDI": true,
          "daily": 105.63335923700002,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 316.90007771100005,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 285.80957771100003,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 285.67350000000005,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 2.1167675725,
          "hasRDI": true,
          "daily": 4.233535145,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 487.61179775000005,
          "hasRDI": true,
          "daily": 162.53726591666668,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 551.9920595405231,
          "hasRDI": true,
          "daily": 22.999669147521796,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 536.6723344000148,
          "hasRDI": true,
          "daily": 53.66723344000149,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 103.7730591166673,
          "hasRDI": true,
          "daily": 24.70787121825412,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 1056.2281677333385,
          "hasRDI": true,
          "daily": 22.472939739007202,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 0.5691139245002031,
          "hasRDI": true,
          "daily": 3.161744025001129,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 7.151080108166728,
          "hasRDI": true,
          "daily": 65.00981916515208,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 63.881084400000006,
          "hasRDI": true,
          "daily": 9.125869200000002,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 1551.2859054000003,
          "hasRDI": true,
          "daily": 172.36510060000003,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": true,
          "daily": 0.0,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 0.32318980925000007,
          "hasRDI": true,
          "daily": 26.932484104166672,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 6.077860702900001,
          "hasRDI": true,
          "daily": 467.5277463769231,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 0.4779793977000001,
          "hasRDI": true,
          "daily": 2.9873712356250004,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.016253885550000003,
          "hasRDI": true,
          "daily": 1.2502988884615387,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 6.80388555,
          "hasRDI": true,
          "daily": 1.7009713875,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 6.80388555,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 0.3855535145000001,
          "hasRDI": true,
          "daily": 16.06472977083334,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 3.401942775,
          "hasRDI": true,
          "daily": 22.6796185,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 5.2616714920000005,
          "hasRDI": true,
          "daily": 35.07780994666667,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 15.875732950000002,
          "hasRDI": true,
          "daily": 13.229777458333334,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 193.73241267233348,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "bookmarked": false,
    "bought": false
  },
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_63d7c62cbc4e24cede9913f4eb7b305c",
      "label": "Brandy butter",
      "image": "https://www.edamam.com/web-img/8a1/8a1d2c5a9e843c8e0c35df0eb4cdd0ce.jpg",
      "source": "BBC",
      "url": "http://www.bbc.co.uk/food/recipes/brandybutter_2535",
      "shareAs": "http://www.edamam.com/recipe/brandy-butter-63d7c62cbc4e24cede9913f4eb7b305c/butter",
      "yield": 6.0,
      "dietLabels": [],
      "healthLabels": [
        "Vegetarian",
        "Peanut-Free",
        "Tree-Nut-Free"
      ],
      "cautions": [],
      "ingredientLines": [
        "125g/4oz unsalted butter, softened",
        "125g/4oz icing sugar",
        "2 tbsp boiling water",
        "3 tbsp brandy"
      ],
      "ingredients": [
        {
          "text": "125g/4oz unsalted butter, softened",
          "weight": 125.0,
          "image": null
        },
        {
          "text": "125g/4oz icing sugar",
          "weight": 125.0,
          "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
        },
        {
          "text": "2 tbsp boiling water",
          "weight": 29.573529562,
          "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
        },
        {
          "text": "3 tbsp brandy",
          "weight": 41.9999999990532,
          "image": "https://www.edamam.com/food-img/1d7/1d785da8ce8dca92df262103058b05d1.jpg"
        }
      ],
      "calories": 1479.5199999978129,
      "totalWeight": 321.5735295610532,
      "totalTime": 100.0,
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 1479.5199999978129,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 101.3875,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 64.21000000000001,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 4.0975,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 26.27625,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 3.80375,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 124.7875,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 122.3375,
          "unit": "g"
        },
        "SUGAR.added": {
          "label": "Sugars, added",
          "quantity": 122.2625,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 1.0625,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 268.75,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 17.852941182470534,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 32.13720588686,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 2.79573529562,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 33.33999999998107,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 0.11679999999962129,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 0.14475735295582126,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 31.679999999962128,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 855.0,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.008769999999943193,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 0.06792999999996213,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.05795999999987692,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.004169999999990532,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 3.75,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 3.75,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 0.21250000000000002,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 1.875,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 2.9,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 8.75,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 80.22845603180744,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 73.97599999989065,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 155.98076923076923,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 321.05000000000007,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 41.59583333333333,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 2.125,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 89.58333333333333,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 0.7438725492696056,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 3.2137205886860003,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 0.6656512608619048,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 0.7093617021272568,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 0.648888888886785,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 1.3159759359620116,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 4.525714285708876,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 95.0,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 0.7308333333285995,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 5.225384615381702,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 0.36224999999923074,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.32076923076850244,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 0.9375,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 8.854166666666668,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 12.5,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 19.333333333333332,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 7.291666666666667,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 101.3875,
          "hasRDI": true,
          "daily": 155.98076923076923,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 64.21000000000001,
              "hasRDI": true,
              "daily": 321.05000000000007,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 4.0975,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 26.27625,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 3.80375,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 124.7875,
          "hasRDI": true,
          "daily": 41.59583333333333,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 124.7875,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 122.3375,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 122.2625,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 1.0625,
          "hasRDI": true,
          "daily": 2.125,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 268.75,
          "hasRDI": true,
          "daily": 89.58333333333333,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 17.852941182470534,
          "hasRDI": true,
          "daily": 0.7438725492696056,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 32.13720588686,
          "hasRDI": true,
          "daily": 3.2137205886860003,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 2.79573529562,
          "hasRDI": true,
          "daily": 0.6656512608619048,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 33.33999999998107,
          "hasRDI": true,
          "daily": 0.7093617021272568,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 0.11679999999962129,
          "hasRDI": true,
          "daily": 0.648888888886785,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 0.14475735295582126,
          "hasRDI": true,
          "daily": 1.3159759359620116,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 31.679999999962128,
          "hasRDI": true,
          "daily": 4.525714285708876,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 855.0,
          "hasRDI": true,
          "daily": 95.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": true,
          "daily": 0.0,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 0.008769999999943193,
          "hasRDI": true,
          "daily": 0.7308333333285995,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 0.06792999999996213,
          "hasRDI": true,
          "daily": 5.225384615381702,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 0.05795999999987692,
          "hasRDI": true,
          "daily": 0.36224999999923074,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.004169999999990532,
          "hasRDI": true,
          "daily": 0.32076923076850244,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 3.75,
          "hasRDI": true,
          "daily": 0.9375,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 3.75,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 0.21250000000000002,
          "hasRDI": true,
          "daily": 8.854166666666668,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 1.875,
          "hasRDI": true,
          "daily": 12.5,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 2.9,
          "hasRDI": true,
          "daily": 19.333333333333332,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 8.75,
          "hasRDI": true,
          "daily": 7.291666666666667,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 80.22845603180744,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "bookmarked": false,
    "bought": false
  }
];
