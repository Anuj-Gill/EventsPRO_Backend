import QRCode from "qrcode";

export const generateQR = async (req,res) => {
  try{
    console.log('generating QR',req.body);
    const {rollNo, eventId} = req.body;
    if(!eventId){
      res.json({message: "You are not registered for this event!!", status: false})
    }
    else {
      const data = `http://localhost:5173/validateQR?rollNO=${rollNo}&id=${eventId}`
        const code = await QRCode.toDataURL(data);
        res.json({src:code, status: true, rollNo})
    }
    
  }
  catch(error) {
    console.log(error)
  }
    
}

