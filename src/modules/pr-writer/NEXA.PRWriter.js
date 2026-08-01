/**
 * ============================================================
 * NEXA Government PR Platform
 * PR Writer Engine
 *
 * File: NEXA.PRWriter.js
 * Version: 0.1.0-alpha
 * ============================================================
 */


class NEXAPRWriter {


  constructor(options = {}){


    this.name =
      "NEXA PR Writer Engine";


    this.version =
      "0.1.0-alpha";


    this.logger =
      options.logger || null;


  }



  generate(newsData = {}){


    const title =
      this.createTitle(newsData);



    const lead =
      this.createLead(newsData);



    const keyMessage =
      this.createKeyMessage(newsData);



    const result = {


      title,

      lead,

      keyMessage,


      generatedAt:
      new Date().toISOString()


    };



    if(this.logger){

      this.logger.info(
        "PR Content Generated",
        result
      );

    }



    return result;

  }




  createTitle(data){


    if(data.title){

      return data.title;

    }


    return "จังหวัดดำเนินกิจกรรมตามภารกิจสำคัญ";

  }





  createLead(data){


    const province =
      data.province ||
      "จังหวัด";


    const activity =
      data.activity ||
      "จัดกิจกรรม";


    return `${province} ${activity} เพื่อขับเคลื่อนภารกิจและสร้างประโยชน์แก่ประชาชน`;

  }





  createKeyMessage(data){


    return [

      "สร้างความร่วมมือทุกภาคส่วน",

      "ขับเคลื่อนงานตามนโยบายภาครัฐ",

      "เกิดประโยชน์ต่อประชาชน"

    ];

  }





  getInfo(){


    return {

      name:
      this.name,


      version:
      this.version

    };


  }


}



export default NEXAPRWriter;