export default async function Page({params}:{params:{teaid:string, teamajor:string}})  {
    //destructure แตกข้อมูลใน params เพื่อเอามาใช้งาน
    const {teaid, teamajor} = await params;

    return (
        <div>
            <h1>SAU Teacher</h1>
            <hr />
            Teacher ID: {teaid}
            <br />
            Teacher Major: {teamajor}
            <hr />
            <h1>WOW WOW WOW</h1>
        </div>
    );
}