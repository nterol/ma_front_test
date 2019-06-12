import React from "react";
import { NotificationButton, Unread } from "./styles";
import { withMainContext, MainContextType } from "../main/MainContext";

type Props = Pick<MainContextType, "notifications">;

export const SNotification = ({ notifications }: Props) => (
  <div>
    <NotificationButton data-test="notification-button" unread={notifications}>
      <i className="mypro-icon mypro-icon-mail" />
      <Unread data-test="notification-container">{notifications}</Unread>
    </NotificationButton>
  </div>
);

export const Notification = withMainContext(SNotification);
