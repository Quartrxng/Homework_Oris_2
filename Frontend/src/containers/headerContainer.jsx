import React, { useEffect, useState } from "react";
import HeaderLogo from "../components/headerLogo";
import OfficesLink from "../components/officesLink";
import PhoneInfo from "../components/phoneInfo";
import Navigation from "../components/navigation";
import SupportButton from "../components/supportButton";

const HeaderContainer = () => {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHeaderData = async () => {
      try {
        const response = await fetch("/api/headerData.json");

        if (!response.ok) {
          throw new Error("Ошибка загрузки headerData.json");
        }

        const data = await response.json();
        setHeaderData(data);
      } catch (error) {
        console.error("Ошибка загрузки header:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHeaderData();
  }, []);

  if (loading) {
    return <div className="siteheader">Загрузка...</div>;
  }

  if (!headerData) {
    return <div className="siteheader">Ошибка загрузки header</div>;
  }

  return (
    <div className="siteheader">
      <div className="siteheader--container">
        <div className="Header_top">
          <HeaderLogo />

          <div className="Header_right">
            <OfficesLink text={headerData.officesText} />
            <PhoneInfo
              phone={headerData.phone}
              workingHours={headerData.workingHours}
            />
          </div>
        </div>

        <div className="headerbottom">
          <Navigation menuItems={headerData.menuItems} />
          <SupportButton text={headerData.supportText} />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;