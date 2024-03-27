const test = async () => {
    const mess = await fetch("http://20.244.56.144/test/register", {
      method: "POST",
      body: JSON.stringify({
        companyName: "goMart",
        ownerName: "Yuvraj",
        rollNo: "2101168EC",
        ownerEmail: "yuvraj.2101168ec@iiitbh.ac.in",
        accessCode: "kJEWWv",
      }),
    });
    const data = await mess.text();
    console.log(data);
  };
  test();

//   {"companyName":"goMart","clientID":"d4f3b32b-ca61-407b-94fd-b3da599e6586","clientSecret":"cklYJriVSvOKCfvO","ownerName":"Yuvraj","ownerEmail":"yuvraj.2101168ec@iiitbh.ac.in","rollNo":"2101168EC"}
