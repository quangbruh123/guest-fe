import axios from "axios";

export const apiGetDistricts = async () => {
  try {
    const response = await axios.get(
      "https://provinces.open-api.vn/api/p/79?depth=3",
    );

    const sortedData = response.data.districts.sort((a, b) => {
      // Sắp xếp theo thứ tự quận
      if (a.division_type === "quận" && b.division_type === "quận") {
        const aIsNumbered = a.codename.match(/\d+/); // Kiểm tra xem tên có phải là số hay không
        const bIsNumbered = b.codename.match(/\d+/);
        if (aIsNumbered && bIsNumbered) {
          // Nếu cả hai là quận có số, so sánh theo số
          return parseInt(aIsNumbered) - parseInt(bIsNumbered);
        }

        return a.codename.localeCompare(b.codename);
      }

      // Đưa thành phố Thủ Đức lên đầu
      if (a.division_type === "thành phố" && b.division_type !== "thành phố") {
        return -1;
      }

      // Đưa huyện xuống cuối
      if (a.division_type === "huyện" && b.division_type !== "huyện") {
        return 1;
      }

      // Mặc định sắp xếp
      return a.code - b.code;
    });
    return sortedData;
  } catch (error) {
    return error;
  }
};
