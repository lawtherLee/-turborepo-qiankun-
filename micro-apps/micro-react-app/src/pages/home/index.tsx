import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:18089/api/micro");
        setData(res.data);
      } catch (error) {
        console.error("请求失败:", error);
      }
    };

    fetchData(); // 调用异步函数
  }, []);

  return (
    <>
      这是react子应用home页面
      <p>以下是接口返回的数据，端口18089</p>
      <h4>{data}</h4>
    </>
  );
};
export default Home;
