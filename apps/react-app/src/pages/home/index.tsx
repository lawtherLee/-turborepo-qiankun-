import { useEffect, useState } from "react";
import reactSvg from "../../assets/react.svg";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:18088/api/hello");
        setData(res.data);
      } catch (error) {
        console.error("请求失败:", error);
      }
    };

    fetchData(); // 调用异步函数
  }, []);

  return (
    <>
      这是react主应用home页面
      <img src={reactSvg} alt="" />
      <p>以下是接口返回的数据，端口18088</p>
      <h4>{data}</h4>
    </>
  );
};
export default Home;
