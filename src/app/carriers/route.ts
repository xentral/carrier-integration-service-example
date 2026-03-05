import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {

  return NextResponse.json({
    carriers: [
      {
        name: "Post Swiss",
        id: "post-ch",
        products: [
          {
            id: "post-ch-express",
            name: "Express",
            description: "The express shipping method of Post Swiss",
            label: {
              type: [
                "pdf",
                "zpl"
              ],
              size: [
                "A4"
              ],
              orientation: [
                "portrait"
              ]
            },
            insurance: {
              available: true
            },
            shipmentType: [
              "outbound",
              "return"
            ]
          }
        ]
      },
      {
        name: "DHL",
        id: "dhl",
        products: [
          {
            id: "dhl-two-man-handling",
            name: "Two Man Handling",
            description: "DHL Two Man Handling, for shipping parcels that require two people to handle with weights above 31.5kg",
            label: {
              type: [
                "pdf",
                "zpl"
              ],
              size: [
                "A4"
              ],
              orientation: [
                "portrait"
              ]
            },
            insurance: {
              available: false
            },
            shipmentType: [
              "outbound",
              "return"
            ]
          },
          {
            id: "dhl-express",
            name: "Express",
            description: "For express shipments with DHL",
            label: {
              type: [
                "pdf",
                "zpl"
              ],
              size: [
                "A4"
              ],
              orientation: [
                "portrait"
              ]
            },
            insurance: {
              available: true
            },
            shipmentType: [
              "outbound",
              "return"
            ],
            carrierOptions: [{
              type: "select",
              id: "AGE_CHECK",
              name: "Age verification",
              description: "When selected the age of the person receiving the parcel will be validated to be higher than the selected age",
              required: true,
              displayContext: "configuration",
              availableValues: [
                {
                  id: "NONE",
                  name: "No age check"
                },
                {
                  id: "AGE_16",
                  name: "16+"
                },
                {
                  id: "AGE_18",
                  name: "18+"
                },
                {
                  id: "AGE_21",
                  name: "21+"
                },
              ]
            }, {
              type: "select",
              id: "PICKUP_TIME",
              name: "Pickup time",
              description: "Select the time that is most convenient for parcel pickup from the warehouse",
              required: true,
              displayContext: "both",
              availableValues: [
                {
                  id: "MORNING",
                  name: "08:00 - 11:00"
                },
                {
                  id: "NOON",
                  name: "11:00 - 13:00"
                },
                {
                  id: "AFTERNOON",
                  name: "13:00 - 17:00"
                },
                {
                  id: "EVENING",
                  name: "17:00 - 21:00"
                },
              ]
            },
            {
              type: "number",
              id: "PACKAGING_WEIGHT",
              name: "Packaging Weight",
              description: "The amount of weight in grams that should be added to the parcel weight to compensate for packing material.",
              required: true,
              displayContext: "labelPrint"
            }
            ]
          }
        ]
      }
    ]
  });
}
