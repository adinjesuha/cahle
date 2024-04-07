import fetch from "node-fetch"

export default async function formHandler(req, res) {
  // POST data to an authenticated API
  const url = "https://api.airtable.com/v0/appcFDmT5NqriAOMJ/Row%20Data"
  
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_API}`,
  }

  try {
    let result = await fetch(url, {
      method: "POST",
      headers: headers,
      // body: req.body.fields
      body: JSON.stringify(req.body)
    }).then(res => {
      return res.json()
    })
    console.log(result)
    res.json(result)

  } catch(err) {
    console.log(err)
    res.status(500).send(err)
  }
}
