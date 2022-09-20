import axios from "axios";

const axiosMock = jest.genMockFromModule<typeof axios>('axios');

axiosMock.create = jest.fn(() => axiosMock);

export default axiosMock;