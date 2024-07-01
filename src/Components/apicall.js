
const BACKEND_URL = "https://api.vosovyapar.com/api/p1";
const BACKEND_URL2 = "https://api.vosovyapar.com/api/u1"; //service

export async function getBusinessDetails(domainName) {
  try {
    const response = await fetch(`${BACKEND_URL}/web?domain=${domainName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        // Add any other headers as needed
      },
      // next: { revalidate: 0 },
      cache: "no-store",
    });
    const data = await response.json();

    if (response.ok) {
      if (data?.success) {
        const Data = data?.data;
        return Data;
      }
    }
    if (data?.status === 404) {
      return data?.message;
    }
  } catch (error) {
    console.log("data", error);
    throw new Error(error);
  }
}