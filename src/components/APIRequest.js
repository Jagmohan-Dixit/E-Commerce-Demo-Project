export const APIRequest = async (method, url, bodyData = null) => {
  try {
    const options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
    };

    if (bodyData) {
      options.body = JSON.stringify(bodyData);
    }
    console.log("options : ", options)
    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response Text:", errorText);
      return { success: false, message: "API returned an error", details: errorText };
    }

    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      const text = await response.text(); // Fallback for non-JSON
      return { success: false, message: "Non-JSON response received", details: text };
    }

  } catch (error) {
    console.error("API Error:", error);
    return { success: false, message: "Server Error occurred", error };
  }
};
