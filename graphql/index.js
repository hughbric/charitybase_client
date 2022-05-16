import { gql } from "@apollo/client";

export const GET_GREEN_CHARITIES_AND_FINANCES = gql`
  query GetGreenCharitiesAndFinances {
    CHC {
      getCharities(
        filters: { search: "green" }
      ) {
        list(limit: 10) {
          id
          names {
            value
          }
          contact {
            email
            phone
            address
          }
          finances {
            income
            spending
          }
          funding {
            grants {
              title
              amountAwarded
              currency
            }
          }
        }
      }
    }
  }
`;
