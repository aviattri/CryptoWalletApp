import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import React from "react";
import MainLayout from "./MainLayout";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { HeaderBar } from "../../components";

const SectionTitle = ({ title }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
      }}
    >
      <Text
        style={{
          color: COLORS.lightGray,
          ...FONTS.body3,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const Setting = ({ title, value, type, onPress }) => {
  if (type == "button") {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginRight: SIZES.radius,
              color: COLORS.lightGray3,
              ...FONTS.h3,
            }}
          >
            {value}
          </Text>
          <Image
            source={icons.rightArrow}
            style={{ height: 15, width: 15, tintColor: COLORS.white }}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>
        <Switch value={value} onValueChange={(value) => onPress(value)} />
      </View>
    );
  }
};

const Profile = () => {
  const [FaceID, setFaceID] = React.useState(false);

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.black,
        }}
      >
        {/* Header */}
        <HeaderBar title={"Profile"} />
        {/* Details */}
        <ScrollView>
          {/* Email & User Id */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
            }}
          >
            {/* Email & Id */}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                {dummyData.profile.email}
              </Text>
              <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
                ID:{dummyData.profile.id}
              </Text>
            </View>
            {/* Status */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.verified}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <Text
                style={{
                  color: COLORS.lightGreen,
                  marginLeft: SIZES.base,
                  ...FONTS.body4,
                }}
              >
                {"Verified"}
              </Text>
            </View>
          </View>
          <SectionTitle title="APP" />
          <Setting
            title="Launch Screen"
            value="Home"
            type="button"
            onPress={() => console.log()}
          />
          <Setting
            title="Apparance"
            value="Dark"
            type="button"
            onPress={() => console.log()}
          />
          <SectionTitle title="ACCOUNT" />
          <Setting
            title="Payment Currency"
            value="USD"
            type="button"
            onPress={() => console.log()}
          />
          <Setting
            title="Language"
            value="English"
            type="button"
            onPress={() => console.log()}
          />
          <SectionTitle title="SECURITY" />
          <Setting
            title="FaceID"
            type="switch"
            value={FaceID}
            onPress={() => setFaceID(!FaceID)}
          />
          <Setting title="Password Settings" type="button" />
          <Setting title="Change Password" type="button" />
          <Setting title="2-Factor Authentication" type="button" />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default Profile;
