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
            ]
          }
        ]
      }
    ]
  });
}
