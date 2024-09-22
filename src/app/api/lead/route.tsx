import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const leadNumber = searchParams.get("id");

  if (!leadNumber) {
    return NextResponse.json({ error: "Lead number is required" }, { status: 400 });
  }

  const options = {
    method: "GET",
    headers: {
      accept: "*/*",
      authorization:
        "Basic Y29udGF0b0BtYW1iYWRpZ2l0YWwuY29tLmJyOmFmYTFmYWYyMGNiMjFiNWMzNDFjOTllOTUyOTliNDczM2VlZTI2ZDY=",
    },
  };

  try {
    const response = await fetch(
      `https://app.nutshell.com/rest/leads?filter[number]=${leadNumber}`,
      options
    );
    const text = await response.text();
    const data = JSON.parse(text);

    if (data.code === 500) {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

    const leadData = data.leads[0];
    const contactId = leadData.links.contacts[0];
    interface Contact {
      id: string;
      jobTitle?: string;
    }

    const contactData = data.contacts.find((contact: Contact) => contact.id === contactId);

    const lead = {
      number: leadData.number,
      name: leadData.name,
      jobTitle: contactData?.jobTitle || "N/A",
    };

    return NextResponse.json(lead);
  } catch (error) {
    console.error("Error fetching lead data:", error);
    return NextResponse.json({ error: "Failed to fetch lead data" }, { status: 500 });
  }
}
