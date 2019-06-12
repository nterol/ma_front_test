import React from "react";
import { NotificationButton, Unread } from "./styles";
import { withMainContext, MainContextType } from "../main/MainContext";

type Props = Pick<MainContextType, "notifications">;

const SNotification = ({ notifications }: Props) => (
  <div>
    <NotificationButton unread={notifications}>
      <i className="mypro-icon mypro-icon-mail" />
      <Unread>{notifications}</Unread>
    </NotificationButton>
  </div>
);

export const Notification = withMainContext(SNotification);
