export function logResponse(status: number, body: any) {
  const timestamp = new Date().toISOString();
  let responseBody = body;

  if (typeof body === 'object' && body !== null) {
    responseBody = JSON.parse(JSON.stringify(body));
    if (responseBody.shippingLabels) {
      responseBody.shippingLabels = responseBody.shippingLabels.map((label: any) => {
        if (label.label?.data) {
          return {
            ...label,
            label: {
              ...label.label,
              data: `${label.label.data.substring(0, 50)}... (truncated, ${label.label.data.length} chars)`
            }
          };
        }
        return label;
      });
    }
  }
  
  console.log(`[${timestamp}] Response Status: ${status}`);
  console.log('Response Body:', JSON.stringify(responseBody, null, 2));
  console.log('---');
}

export function logRequestBody(body: any) {
  if (body) {
    console.log('Request Body:', JSON.stringify(body, null, 2));
  }
}

