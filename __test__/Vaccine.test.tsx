import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";
import { Hospitals } from "../interfaces";
import Hospital from "@/db/models/Hospital";

const mockResult: Hospitals = {
    success: true,
    count: 2,
    pagination: {},
    data: [
        {
            _id: "13579111315",
            name: "The First Hospital Name",
            address: "123 road",
            district: "Bobo",
            province: "Bangkok",
            postalcode: "99999",
            tel: "0812345678",
            picture: "https://cataas.com/cat",
            __v: 500,
            id: "13579111315"
        },
        {
            _id: "13579111319",
            name: "The Second Hospital Name",
            address: "321 road",
            district: "Gaga",
            province: "Chiang Mai",
            postalcode: "11111",
            tel: "0898765432",
            picture: "https://cataas.com/cat",
            __v: 300,
            id: "13579111319"
        }
    ]
}

describe('HospitalCatalog', () => {
    it('should have correct number of hospital images', async () => {
        const hospitalCatalog = await HospitalCatalog({fetchedData: mockResult})
        render(hospitalCatalog);
        await waitFor(
            () => {
                const hospitalImages = screen.queryAllByRole('img');
                expect(hospitalImages.length).toBe(2);
            }
        )
    })
})