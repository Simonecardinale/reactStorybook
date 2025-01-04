import Navbar from "./Navbar.tsx";
import {NAVBAR_MENU_VOICES} from "../settings.ts";
import type {StoryObj} from "@storybook/react";
import meta from "../stories/Page.stories.ts";
import {expect, within} from "@storybook/test";

export default {
    component: Navbar,
    title: "Navbar",
    args: {
        menuVoices: [...NAVBAR_MENU_VOICES]
    }
}

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', { name: /Menu/i });
        await expect(loginButton).toBeInTheDocument();

        const aboutButton = canvas.getByRole('button', { name: /About/i });
        await expect(aboutButton).toBeInTheDocument();

        const contactButton = canvas.getByRole('button', { name: /Contact/i });
        await expect(contactButton).toBeInTheDocument();

    }
}


