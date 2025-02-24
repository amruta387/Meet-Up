/* eslint-env jest */
// src/__tests__/Event.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import Event from "../components/Event";

describe("<Event /> component", () => {
	let EventComponent;
	let allEvents;

	beforeEach(async () => {
		allEvents = await getEvents();
		
		// Ensure we have events before rendering
		if (!allEvents || allEvents.length === 0) {
			throw new Error("getEvents() returned an empty array");
		}

		EventComponent = render(<Event event={allEvents[0]} />);
	});

	test("renders event Title", () => {
		expect(screen.getByText(allEvents[0].summary)).toBeInTheDocument();
	});

	test("renders event location", () => {
		const event = allEvents[0];
	
		if (!event.location) {
			console.warn("Skipping test: Event has no location.");
			return;
		}
		expect(
			EventComponent.container.querySelector(".event-location")
		).toBeInTheDocument();
	});
	

	test("renders event details button with the title (show details)", () => {
		expect(screen.getByText("show details")).toBeInTheDocument();
	});

	test("by default, event's details section should be hidden", () => {
		expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
	});

	test("shows the details section when the user clicks on the 'show details' button", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByText("show details"));

		expect(EventComponent.container.querySelector(".details")).toBeInTheDocument();
		expect(screen.getByText("hide details")).toBeInTheDocument();
		expect(screen.queryByText("show details")).not.toBeInTheDocument();
	});

	test("hides the details section when the user clicks on the 'hide details' button", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("show details"));
		expect(EventComponent.container.querySelector(".details")).toBeInTheDocument();
		expect(screen.getByText("hide details")).toBeInTheDocument();
		expect(screen.queryByText("show details")).not.toBeInTheDocument();

		await user.click(screen.getByText("hide details"));
		expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
		expect(screen.queryByText("hide details")).not.toBeInTheDocument();
		expect(screen.getByText("show details")).toBeInTheDocument();
	});
});
