# Example output
```console
> tri-pod-demo@0.0.1 start
> node index.js

doing login for {
  podName: 'signer',
  email: 'signer@solid.server',
  password: 'signer',
  webId: 'http://localhost:3000/signer/profile/card#me'
}
server is up
returning {
  accessToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlVTelpNZW1LQWZoTVYwYmVnekVzcjk2WjdCdjRjRlNJemNHcGVYanAxX0kifQ.eyJ3ZWJpZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaWduZXIvcHJvZmlsZS9jYXJkI21lIiwianRpIjoiTE5xZUpMWkYzSGE4cWlfcnkyaGVLIiwic3ViIjoic2lnbmVyLXRva2VuXzExNWY0YmYwLWIyYzAtNDVjOS05NjRlLTM4MjAxZmY0NDk2MCIsImlhdCI6MTcxMDYwMzE5NiwiZXhwIjoxNzEwNjAzNzk2LCJzY29wZSI6IndlYmlkIiwiY2xpZW50X2lkIjoic2lnbmVyLXRva2VuXzExNWY0YmYwLWIyYzAtNDVjOS05NjRlLTM4MjAxZmY0NDk2MCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJhdWQiOiJzb2xpZCIsImNuZiI6eyJqa3QiOiJfdVNmYnFrU3VBbjh5YUVzY0FYMlcwaHVjaEhtMnNKUkdVOVNhOWM3VzVBIn19.u7_gelQNG92pAmwZd3NAERgnTUczp5Tyd6fWXyqTHgYT9TISL9azANxDcO5BvgTMIF7--8r0QjGq7GA4RrKqPw',
  dpopKey: {
    privateKey: PrivateKeyObject [KeyObject] {
      [Symbol(kKeyType)]: 'private',
      [Symbol(kHandle)]: {},
      [Symbol(kAsymmetricKeyType)]: 'ec',
      [Symbol(kAsymmetricKeyDetails)]: { namedCurve: 'prime256v1' },
      [asymmetricKeyType]: [Getter],
      [asymmetricKeyDetails]: [Getter],
      [type]: [Getter],
      [Symbol(Symbol.toStringTag)]: 'KeyObject'
    },
    publicKey: {
      kty: 'EC',
      x: 'AYVaRjju1r45Y1S-z_PhIe1q6cx2-doWkvUbbbuBSIc',
      y: 'R2tgnTdNmJNjH6IONdZzlJZ3aQDpPwBgjjto5azIHAM',
      crv: 'P-256',
      alg: 'ES256'
    }
  },
  authFetch: [AsyncFunction (anonymous)] {
    [length]: 2,
    [name]: '',
    [Symbol(Symbol.toStringTag)]: 'AsyncFunction'
  }
}
got credentials for signer
setting up inbox for http://localhost:3000/signer/
PUT inbox container. Status: 403 - Forbidden
http://localhost:3000/signer/inbox/.acl
PUT inbox ACL. Status: 205 - Reset Content
Patching inbox location. Status: 205 - Reset Content
Link headers of http://localhost:3000/signer/profile/card:
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3000/signer/inbox/>; rel="http://www.w3.org/ns/ldp#inbox", <http://localhost:3000/signer/profile/card.meta>; rel="describedby", <http://localhost:3000/signer/profile/card.acl>; rel="acl", <http://localhost:3000/signer/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
PUT intial document on signer's pod. Status: 205 - Reset Content
doing login for {
  podName: 'holder',
  email: 'holder@solid.server',
  password: 'holder',
  webId: 'http://localhost:3000/holder/profile/card#me'
}
returning {
  accessToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlVTelpNZW1LQWZoTVYwYmVnekVzcjk2WjdCdjRjRlNJemNHcGVYanAxX0kifQ.eyJ3ZWJpZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ob2xkZXIvcHJvZmlsZS9jYXJkI21lIiwianRpIjoiUzRQWDhwQkpoRzdzYU5MS3BhZTk4Iiwic3ViIjoiaG9sZGVyLXRva2VuXzFmYjc4YjA0LWE4NjQtNGMwYi05NjAzLTJlYzM3MWI2MmEwOCIsImlhdCI6MTcxMDYwMzE5NiwiZXhwIjoxNzEwNjAzNzk2LCJzY29wZSI6IndlYmlkIiwiY2xpZW50X2lkIjoiaG9sZGVyLXRva2VuXzFmYjc4YjA0LWE4NjQtNGMwYi05NjAzLTJlYzM3MWI2MmEwOCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJhdWQiOiJzb2xpZCIsImNuZiI6eyJqa3QiOiJybkx0emI2UU5jSWtaNVdnVFZoekJsMWtYdldOSHN4YmNnS2dDdTZYQy1VIn19.GFQGp-PDQoDXZOQTHNCxE9BfW7LZcMo1jn5LGl6UvATP3457dtr4HHEhKbO9o56_3MLYQ4RdXAhxZroKfZsG8g',
  dpopKey: {
    privateKey: PrivateKeyObject [KeyObject] {
      [Symbol(kKeyType)]: 'private',
      [Symbol(kHandle)]: {},
      [Symbol(kAsymmetricKeyType)]: 'ec',
      [Symbol(kAsymmetricKeyDetails)]: { namedCurve: 'prime256v1' },
      [asymmetricKeyType]: [Getter],
      [asymmetricKeyDetails]: [Getter],
      [type]: [Getter],
      [Symbol(Symbol.toStringTag)]: 'KeyObject'
    },
    publicKey: {
      kty: 'EC',
      x: 'uyEZAYJPwGykKqNUgYdoqzAk3BgaHNNsYkaM8mYvml0',
      y: 'iJo68FgmTnxQ8dLlom-vfVQlUa1CaMTHG0gqRnRUUA4',
      crv: 'P-256',
      alg: 'ES256'
    }
  },
  authFetch: [AsyncFunction (anonymous)] {
    [length]: 2,
    [name]: '',
    [Symbol(Symbol.toStringTag)]: 'AsyncFunction'
  }
}
Holder: got credentials for holder
setting up inbox for http://localhost:3000/holder/
PUT inbox container. Status: 403 - Forbidden
http://localhost:3000/holder/inbox/.acl
PUT inbox ACL. Status: 205 - Reset Content
Patching inbox location. Status: 205 - Reset Content
Link headers of http://localhost:3000/holder/profile/card:
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3000/holder/inbox/>; rel="http://www.w3.org/ns/ldp#inbox", <http://localhost:3000/holder/profile/card.meta>; rel="describedby", <http://localhost:3000/holder/profile/card.acl>; rel="acl", <http://localhost:3000/holder/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
Holder: inbox is at http://localhost:3000/holder/inbox/
doing login for {
  podName: 'verifier',
  email: 'verifier@solid.server',
  password: 'verifier',
  webId: 'http://localhost:3000/verifier/profile/card#me'
}
returning {
  accessToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlVTelpNZW1LQWZoTVYwYmVnekVzcjk2WjdCdjRjRlNJemNHcGVYanAxX0kifQ.eyJ3ZWJpZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92ZXJpZmllci9wcm9maWxlL2NhcmQjbWUiLCJqdGkiOiI3U1hhUTh2a1l0aHJBRGVCcjZrUmEiLCJzdWIiOiJ2ZXJpZmllci10b2tlbl81MjYxOGRhNy1iMTA4LTRhNWUtOTZhZC1lNTg5MzFlMjQ2OTYiLCJpYXQiOjE3MTA2MDMxOTYsImV4cCI6MTcxMDYwMzc5Niwic2NvcGUiOiJ3ZWJpZCIsImNsaWVudF9pZCI6InZlcmlmaWVyLXRva2VuXzUyNjE4ZGE3LWIxMDgtNGE1ZS05NmFkLWU1ODkzMWUyNDY5NiIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJhdWQiOiJzb2xpZCIsImNuZiI6eyJqa3QiOiJjS2Q2YVRteFJvV3dmOGlHMmNYNTFPQTN0ZENyRlZBN3MtOENUdmcwLWtVIn19.WqKlvrXKR1-BGnQQvlta8fIczfC3dF7jxrmcaP6BEChW16IuD8sPTVammNk0WTNzhQB3599A6kGMHC2EPFJGQg',
  dpopKey: {
    privateKey: PrivateKeyObject [KeyObject] {
      [Symbol(kKeyType)]: 'private',
      [Symbol(kHandle)]: {},
      [Symbol(kAsymmetricKeyType)]: 'ec',
      [Symbol(kAsymmetricKeyDetails)]: { namedCurve: 'prime256v1' },
      [asymmetricKeyType]: [Getter],
      [asymmetricKeyDetails]: [Getter],
      [type]: [Getter],
      [Symbol(Symbol.toStringTag)]: 'KeyObject'
    },
    publicKey: {
      kty: 'EC',
      x: 'IeB12hwgIR0mhgOxOtd68cvasir7C4dgQ3dVykxFRXY',
      y: 'kCfmXxLj-hTYDas7KBe8NGHz-la0GCT58Y-fHhed3Us',
      crv: 'P-256',
      alg: 'ES256'
    }
  },
  authFetch: [AsyncFunction (anonymous)] {
    [length]: 2,
    [name]: '',
    [Symbol(Symbol.toStringTag)]: 'AsyncFunction'
  }
}
got credentials for verifier
setting up inbox for http://localhost:3000/verifier/
PUT inbox container. Status: 403 - Forbidden
http://localhost:3000/verifier/inbox/.acl
PUT inbox ACL. Status: 205 - Reset Content
Patching inbox location. Status: 205 - Reset Content
Link headers of http://localhost:3000/verifier/profile/card:
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3000/verifier/inbox/>; rel="http://www.w3.org/ns/ldp#inbox", <http://localhost:3000/verifier/profile/card.meta>; rel="describedby", <http://localhost:3000/verifier/profile/card.acl>; rel="acl", <http://localhost:3000/verifier/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
verifier inbox is at http://localhost:3000/verifier/inbox/
# Issuer issued VC
Input document
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1",
    "https://w3id.org/security/bbs/v1"
  ],
  "id": "https://issuer.oidp.uscis.gov/credentials/83627465",
  "type": [
    "VerifiableCredential",
    "PermanentResidentCard"
  ],
  "issuer": "did:example:489398593",
  "identifier": "83627465",
  "name": "Permanent Resident Card",
  "description": "Government of Example Permanent Resident Card.",
  "issuanceDate": "2019-12-03T12:19:52Z",
  "expirationDate": "2029-12-03T12:19:52Z",
  "credentialSubject": {
    "id": "did:example:b34ca6cd37bbf23",
    "type": [
      "PermanentResident",
      "Person"
    ],
    "givenName": "JOHN",
    "familyName": "SMITH",
    "gender": "Male",
    "image": "data:image/png;base64,iVBORw0KGgokJggg==",
    "residentSince": "2015-01-01",
    "lprCategory": "C09",
    "lprNumber": "999-999-999",
    "commuterClassification": "C1",
    "birthCountry": "Bahamas",
    "birthDate": "1958-07-17"
  }
}
Input document with proof
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1",
    "https://w3id.org/security/bbs/v1"
  ],
  "id": "https://issuer.oidp.uscis.gov/credentials/83627465",
  "type": [
    "VerifiableCredential",
    "PermanentResidentCard"
  ],
  "issuer": "did:example:489398593",
  "identifier": "83627465",
  "name": "Permanent Resident Card",
  "description": "Government of Example Permanent Resident Card.",
  "issuanceDate": "2019-12-03T12:19:52Z",
  "expirationDate": "2029-12-03T12:19:52Z",
  "credentialSubject": {
    "id": "did:example:b34ca6cd37bbf23",
    "type": [
      "PermanentResident",
      "Person"
    ],
    "givenName": "JOHN",
    "familyName": "SMITH",
    "gender": "Male",
    "image": "data:image/png;base64,iVBORw0KGgokJggg==",
    "residentSince": "2015-01-01",
    "lprCategory": "C09",
    "lprNumber": "999-999-999",
    "commuterClassification": "C1",
    "birthCountry": "Bahamas",
    "birthDate": "1958-07-17"
  },
  "proof": {
    "type": "BbsBlsSignature2020",
    "created": "2024-03-12T15:33:16Z",
    "proofPurpose": "assertionMethod",
    "proofValue": "ox2SXYgZ3R+cpqvaRvq/FxCVM9+nIF0kuYvB1rO8rtTkdrxo4KuN7ytOIzcY280JYUHlKfzccE4m7waZyoLEkBLFiK2g54Q2i+CdtYBgDdkUDsoULSBMcH1MwGHwdjfXpldFNFrHFx/IAvLVniyeMQ==",
    "verificationMethod": "did:example:489398593#test"
  }
}
Verification result
{
  "verified": true,
  "results": [
    {
      "proof": {
        "@context": "https://w3id.org/security/v2",
        "type": "sec:BbsBlsSignature2020",
        "created": "2024-03-12T15:33:16Z",
        "proofPurpose": "assertionMethod",
        "proofValue": "ox2SXYgZ3R+cpqvaRvq/FxCVM9+nIF0kuYvB1rO8rtTkdrxo4KuN7ytOIzcY280JYUHlKfzccE4m7waZyoLEkBLFiK2g54Q2i+CdtYBgDdkUDsoULSBMcH1MwGHwdjfXpldFNFrHFx/IAvLVniyeMQ==",
        "verificationMethod": "did:example:489398593#test"
      },
      "verified": true
    }
  ]
}
Verificaton result: true
# Issuer sent VC to Holder
discovering inbox via http://localhost:3000/holder/profile/card#me
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3000/holder/inbox/>; rel="http://www.w3.org/ns/ldp#inbox", <http://localhost:3000/holder/profile/card.meta>; rel="describedby", <http://localhost:3000/holder/profile/card.acl>; rel="acl", <http://localhost:3000/holder/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
Discovered inbox: http://localhost:3000/holder/inbox/
sending message
{
  "id": "ltu8z656xlhrg8wqye",
  "from": "http://localhost:3000/signer/profile/card#me",
  "to": "http://localhost:3000/holder/profile/card#me",
  "type": "https://example.org/IPCEP/transfer",
  "created_time": "2024-03-12T15:33:16.890Z",
  "body": {
    "signedDocument": {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/citizenship/v1",
        "https://w3id.org/security/bbs/v1"
      ],
      "id": "https://issuer.oidp.uscis.gov/credentials/83627465",
      "type": [
        "VerifiableCredential",
        "PermanentResidentCard"
      ],
      "issuer": "did:example:489398593",
      "identifier": "83627465",
      "name": "Permanent Resident Card",
      "description": "Government of Example Permanent Resident Card.",
      "issuanceDate": "2019-12-03T12:19:52Z",
      "expirationDate": "2029-12-03T12:19:52Z",
      "credentialSubject": {
        "id": "did:example:b34ca6cd37bbf23",
        "type": [
          "PermanentResident",
          "Person"
        ],
        "givenName": "JOHN",
        "familyName": "SMITH",
        "gender": "Male",
        "image": "data:image/png;base64,iVBORw0KGgokJggg==",
        "residentSince": "2015-01-01",
        "lprCategory": "C09",
        "lprNumber": "999-999-999",
        "commuterClassification": "C1",
        "birthCountry": "Bahamas",
        "birthDate": "1958-07-17"
      },
      "proof": {
        "type": "BbsBlsSignature2020",
        "created": "2024-03-12T15:33:16Z",
        "proofPurpose": "assertionMethod",
        "proofValue": "ox2SXYgZ3R+cpqvaRvq/FxCVM9+nIF0kuYvB1rO8rtTkdrxo4KuN7ytOIzcY280JYUHlKfzccE4m7waZyoLEkBLFiK2g54Q2i+CdtYBgDdkUDsoULSBMcH1MwGHwdjfXpldFNFrHFx/IAvLVniyeMQ==",
        "verificationMethod": "did:example:489398593#test"
      }
    },
    "verificationResult": {
      "verified": true,
      "results": [
        {
          "proof": {
            "@context": "https://w3id.org/security/v2",
            "type": "sec:BbsBlsSignature2020",
            "created": "2024-03-12T15:33:16Z",
            "proofPurpose": "assertionMethod",
            "proofValue": "ox2SXYgZ3R+cpqvaRvq/FxCVM9+nIF0kuYvB1rO8rtTkdrxo4KuN7ytOIzcY280JYUHlKfzccE4m7waZyoLEkBLFiK2g54Q2i+CdtYBgDdkUDsoULSBMcH1MwGHwdjfXpldFNFrHFx/IAvLVniyeMQ==",
            "verificationMethod": "did:example:489398593#test"
          },
          "verified": true
        }
      ]
    }
  }
}
201
notification to be found at http://localhost:3000/holder/inbox/bf54c12b-aed1-461d-87a8-528bdd5b6ab7
Holder: Discovering notifications
discovering inbox via http://localhost:3000/holder/profile/card#me
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3000/holder/inbox/>; rel="http://www.w3.org/ns/ldp#inbox", <http://localhost:3000/holder/profile/card.meta>; rel="describedby", <http://localhost:3000/holder/profile/card.acl>; rel="acl", <http://localhost:3000/holder/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
Discovered inbox: http://localhost:3000/holder/inbox/
notifications discovery: status 200
@prefix dc: <http://purl.org/dc/terms/>.
@prefix ldp: <http://www.w3.org/ns/ldp#>.
@prefix posix: <http://www.w3.org/ns/posix/stat#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

<> a ldp:Container, ldp:BasicContainer, ldp:Resource;
    dc:modified "2024-03-12T15:33:16.000Z"^^xsd:dateTime;
    ldp:contains <e7b083b2-c86b-4c39-bdf3-8bef029936fc>, <97bb3d26-61ef-41a7-b369-a61ad8761cff>, <52bda95b-885f-4a49-b76c-0f48bd762d2f>, <92568fed-ece2-4056-ae24-bba7f7388a61>, <64f710fc-e09e-40a5-9c9c-46719528fdbe>, <80a6eef6-3523-4101-b88f-0e4b731e861d>, <50e8b664-d6fe-4259-9afe-3bf427d92de7>, <dce08f80-72c5-4723-80c7-e448106436a9>, <f23063e5-998f-46f4-91bc-4dd35cb5fd1d>, <44717946-b6ca-4a4e-8c94-58788b905a28>, <f89baa3f-2135-48bd-9425-7292377fe112>, <af3f6f9b-305f-4119-b8df-92dd64ce705a>, <0e5e1c9b-a59d-46ae-8f0b-395ba4ec3f94>, <cf11b763-b95e-4661-bbbf-f6efa16f3e92>, <d7f90b6b-f135-4d1b-8296-5bb9c9503ade>, <6a123677-fa05-4a78-a685-de80dca6ff34>, <d3502194-0954-47fe-b31a-57c5d924c2c0>, <9c53b68c-78df-47c3-93ff-84fa4b726f2b>, <4777caab-e8b0-4abc-8106-8ff365bb0ff6>, <a0fe9dcf-b878-4035-ae09-84f80b9f2e28>, <2654abd4-95a9-49e7-a038-423017906e89>, <0fbdf88c-ebc2-41cb-aa8b-ee4c6159aefb>, <20483ddf-ce67-4025-b96c-9df788c42167>, <fb335f05-61a2-4ca3-89a9-7f3b1e1545be>, <3493d552-c141-4cc2-a4ac-fffad09d530e>, <b4d93ce3-99d1-4763-b3bc-d46dcda563f1>, <4aaea805-ccd2-4568-b11b-0a29e667b24b>, <4e0ad375-c5d5-4434-80ea-0f4fc490bc38>, <07ebf3b5-3d15-4abc-a17d-2e67891128d8>, <af74f667-085b-429f-88ee-4e42b49d7f74>, <75dc7444-b6ed-40a6-ad80-d4cfa64f50a0>, <422b717a-2cbc-4266-b6ad-9649c3186cf4>, <f63f6bcc-47f5-4e69-ac43-af75ebfdaeb8>, <d229597f-fa1f-4c30-86e7-dc069162191c>, <b9b1da4f-f22c-4990-ad9a-6b2b1ee5cdad>, <9bde943d-cf7f-4035-9fc0-2b2b9ff9bff2>, <18371c24-69af-4b8d-928f-3c7e43f6c437>, <6729d483-d68a-4691-8356-be4f7992c29b>, <786bd154-96bf-4d79-bc88-6e190f7fd3ec>, <d770b3d0-bc03-42b2-b39e-a27e9293496b>, <a5e89006-2ac5-4570-bfcd-04af3257e497>, <40874c33-b879-4766-a05f-6b43d7683d8c>, <dd5ae9b3-a9f6-47e0-8c33-a64d908dec47>, <094e41fa-da4c-44bd-9ea4-f599c464d263>, <bf54c12b-aed1-461d-87a8-528bdd5b6ab7>.

ldp:contains <e7b083b2-c86b-4c39-bdf3-8bef029936fc>, <97bb3d26-61ef-41a7-b369-a61ad8761cff>, <52bda95b-885f-4a49-b76c-0f48bd762d2f>, <92568fed-ece2-4056-ae24-bba7f7388a61>, <64f710fc-e09e-40a5-9c9c-46719528fdbe>, <80a6eef6-3523-4101-b88f-0e4b731e861d>, <50e8b664-d6fe-4259-9afe-3bf427d92de7>, <dce08f80-72c5-4723-80c7-e448106436a9>, <f23063e5-998f-46f4-91bc-4dd35cb5fd1d>, <44717946-b6ca-4a4e-8c94-58788b905a28>, <f89baa3f-2135-48bd-9425-7292377fe112>, <af3f6f9b-305f-4119-b8df-92dd64ce705a>, <0e5e1c9b-a59d-46ae-8f0b-395ba4ec3f94>, <cf11b763-b95e-4661-bbbf-f6efa16f3e92>, <d7f90b6b-f135-4d1b-8296-5bb9c9503ade>, <6a123677-fa05-4a78-a685-de80dca6ff34>, <d3502194-0954-47fe-b31a-57c5d924c2c0>, <9c53b68c-78df-47c3-93ff-84fa4b726f2b>, <4777caab-e8b0-4abc-8106-8ff365bb0ff6>, <a0fe9dcf-b878-4035-ae09-84f80b9f2e28>, <2654abd4-95a9-49e7-a038-423017906e89>, <0fbdf88c-ebc2-41cb-aa8b-ee4c6159aefb>, <20483ddf-ce67-4025-b96c-9df788c42167>, <fb335f05-61a2-4ca3-89a9-7f3b1e1545be>, <3493d552-c141-4cc2-a4ac-fffad09d530e>, <b4d93ce3-99d1-4763-b3bc-d46dcda563f1>, <4aaea805-ccd2-4568-b11b-0a29e667b24b>, <4e0ad375-c5d5-4434-80ea-0f4fc490bc38>, <07ebf3b5-3d15-4abc-a17d-2e67891128d8>, <af74f667-085b-429f-88ee-4e42b49d7f74>, <75dc7444-b6ed-40a6-ad80-d4cfa64f50a0>, <422b717a-2cbc-4266-b6ad-9649c3186cf4>, <f63f6bcc-47f5-4e69-ac43-af75ebfdaeb8>, <d229597f-fa1f-4c30-86e7-dc069162191c>, <b9b1da4f-f22c-4990-ad9a-6b2b1ee5cdad>, <9bde943d-cf7f-4035-9fc0-2b2b9ff9bff2>, <18371c24-69af-4b8d-928f-3c7e43f6c437>, <6729d483-d68a-4691-8356-be4f7992c29b>, <786bd154-96bf-4d79-bc88-6e190f7fd3ec>, <d770b3d0-bc03-42b2-b39e-a27e9293496b>, <a5e89006-2ac5-4570-bfcd-04af3257e497>, <40874c33-b879-4766-a05f-6b43d7683d8c>, <dd5ae9b3-a9f6-47e0-8c33-a64d908dec47>, <094e41fa-da4c-44bd-9ea4-f599c464d263>, <bf54c12b-aed1-461d-87a8-528bdd5b6ab7>.
e7b083b2-c86b-4c39-bdf3-8bef029936fc
97bb3d26-61ef-41a7-b369-a61ad8761cff
52bda95b-885f-4a49-b76c-0f48bd762d2f
92568fed-ece2-4056-ae24-bba7f7388a61
64f710fc-e09e-40a5-9c9c-46719528fdbe
80a6eef6-3523-4101-b88f-0e4b731e861d
50e8b664-d6fe-4259-9afe-3bf427d92de7
dce08f80-72c5-4723-80c7-e448106436a9
f23063e5-998f-46f4-91bc-4dd35cb5fd1d
44717946-b6ca-4a4e-8c94-58788b905a28
f89baa3f-2135-48bd-9425-7292377fe112
af3f6f9b-305f-4119-b8df-92dd64ce705a
0e5e1c9b-a59d-46ae-8f0b-395ba4ec3f94
cf11b763-b95e-4661-bbbf-f6efa16f3e92
d7f90b6b-f135-4d1b-8296-5bb9c9503ade
6a123677-fa05-4a78-a685-de80dca6ff34
d3502194-0954-47fe-b31a-57c5d924c2c0
9c53b68c-78df-47c3-93ff-84fa4b726f2b
4777caab-e8b0-4abc-8106-8ff365bb0ff6
a0fe9dcf-b878-4035-ae09-84f80b9f2e28
2654abd4-95a9-49e7-a038-423017906e89
0fbdf88c-ebc2-41cb-aa8b-ee4c6159aefb
20483ddf-ce67-4025-b96c-9df788c42167
fb335f05-61a2-4ca3-89a9-7f3b1e1545be
3493d552-c141-4cc2-a4ac-fffad09d530e
b4d93ce3-99d1-4763-b3bc-d46dcda563f1
4aaea805-ccd2-4568-b11b-0a29e667b24b
4e0ad375-c5d5-4434-80ea-0f4fc490bc38
07ebf3b5-3d15-4abc-a17d-2e67891128d8
af74f667-085b-429f-88ee-4e42b49d7f74
75dc7444-b6ed-40a6-ad80-d4cfa64f50a0
422b717a-2cbc-4266-b6ad-9649c3186cf4
f63f6bcc-47f5-4e69-ac43-af75ebfdaeb8
d229597f-fa1f-4c30-86e7-dc069162191c
b9b1da4f-f22c-4990-ad9a-6b2b1ee5cdad
9bde943d-cf7f-4035-9fc0-2b2b9ff9bff2
18371c24-69af-4b8d-928f-3c7e43f6c437
6729d483-d68a-4691-8356-be4f7992c29b
786bd154-96bf-4d79-bc88-6e190f7fd3ec
d770b3d0-bc03-42b2-b39e-a27e9293496b
a5e89006-2ac5-4570-bfcd-04af3257e497
40874c33-b879-4766-a05f-6b43d7683d8c
dd5ae9b3-a9f6-47e0-8c33-a64d908dec47
094e41fa-da4c-44bd-9ea4-f599c464d263
bf54c12b-aed1-461d-87a8-528bdd5b6ab7
Holder: filtering notifications
getting notification at http://localhost:3000/holder/inbox/e7b083b2-c86b-4c39-bdf3-8bef029936fc
Holder: notification is at http://localhost:3000/holder/inbox/e7b083b2-c86b-4c39-bdf3-8bef029936fc
# Holder consuming notification e7b083b2-c86b-4c39-bdf3-8bef029936fc
Holder: deriving new VC
Holder: Received message from Issuer! http://localhost:3000/holder/inbox/e7b083b2-c86b-4c39-bdf3-8bef029936fc
discovering inbox via http://localhost:3000/holder/profile/card#me
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3000/holder/inbox/>; rel="http://www.w3.org/ns/ldp#inbox", <http://localhost:3000/holder/profile/card.meta>; rel="describedby", <http://localhost:3000/holder/profile/card.acl>; rel="acl", <http://localhost:3000/holder/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
Discovered inbox: http://localhost:3000/holder/inbox/
getting notification at http://localhost:3000/holder/inbox/e7b083b2-c86b-4c39-bdf3-8bef029936fc
{
  id: 'ltu626ad2f4khekmszd',
  from: 'http://localhost:3000/signer/profile/card#me',
  to: 'http://localhost:3000/holder/profile/card#me',
  type: 'https://example.org/IPCEP/transfer',
  created_time: '2024-03-12T14:11:38.197Z',
  body: {
    signedDocument: {
      '@context': [Array],
      id: 'https://issuer.oidp.uscis.gov/credentials/83627465',
      type: [Array],
      issuer: 'did:example:489398593',
      identifier: '83627465',
      name: 'Permanent Resident Card',
      description: 'Government of Example Permanent Resident Card.',
      issuanceDate: '2019-12-03T12:19:52Z',
      expirationDate: '2029-12-03T12:19:52Z',
      credentialSubject: [Object],
      proof: [Object]
    },
    verificationResult: { verified: true, results: [Array] }
  }
}
{
  signedDocument: {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://w3id.org/citizenship/v1',
      'https://w3id.org/security/bbs/v1'
    ],
    id: 'https://issuer.oidp.uscis.gov/credentials/83627465',
    type: [ 'VerifiableCredential', 'PermanentResidentCard' ],
    issuer: 'did:example:489398593',
    identifier: '83627465',
    name: 'Permanent Resident Card',
    description: 'Government of Example Permanent Resident Card.',
    issuanceDate: '2019-12-03T12:19:52Z',
    expirationDate: '2029-12-03T12:19:52Z',
    credentialSubject: {
      id: 'did:example:b34ca6cd37bbf23',
      type: [Array],
      givenName: 'JOHN',
      familyName: 'SMITH',
      gender: 'Male',
      image: 'data:image/png;base64,iVBORw0KGgokJggg==',
      residentSince: '2015-01-01',
      lprCategory: 'C09',
      lprNumber: '999-999-999',
      commuterClassification: 'C1',
      birthCountry: 'Bahamas',
      birthDate: '1958-07-17'
    },
    proof: {
      type: 'BbsBlsSignature2020',
      created: '2024-03-12T14:11:37Z',
      proofPurpose: 'assertionMethod',
      proofValue: 'kKgcICjuNb5ei3BtCe5I2pSFc6B1FQyIRtmN2eChgiMZPmSXfPURtjL4o658ZICtYUHlKfzccE4m7waZyoLEkBLFiK2g54Q2i+CdtYBgDdkUDsoULSBMcH1MwGHwdjfXpldFNFrHFx/IAvLVniyeMQ==',
      verificationMethod: 'did:example:489398593#test'
    }
  },
  verificationResult: { verified: true, results: [ [Object] ] }
}
Signed document
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1",
    "https://w3id.org/security/bbs/v1"
  ],
  "id": "https://issuer.oidp.uscis.gov/credentials/83627465",
  "type": [
    "VerifiableCredential",
    "PermanentResidentCard"
  ],
  "issuer": "did:example:489398593",
  "identifier": "83627465",
  "name": "Permanent Resident Card",
  "description": "Government of Example Permanent Resident Card.",
  "issuanceDate": "2019-12-03T12:19:52Z",
  "expirationDate": "2029-12-03T12:19:52Z",
  "credentialSubject": {
    "id": "did:example:b34ca6cd37bbf23",
    "type": [
      "PermanentResident",
      "Person"
    ],
    "givenName": "JOHN",
    "familyName": "SMITH",
    "gender": "Male",
    "image": "data:image/png;base64,iVBORw0KGgokJggg==",
    "residentSince": "2015-01-01",
    "lprCategory": "C09",
    "lprNumber": "999-999-999",
    "commuterClassification": "C1",
    "birthCountry": "Bahamas",
    "birthDate": "1958-07-17"
  },
  "proof": {
    "type": "BbsBlsSignature2020",
    "created": "2024-03-12T14:11:37Z",
    "proofPurpose": "assertionMethod",
    "proofValue": "kKgcICjuNb5ei3BtCe5I2pSFc6B1FQyIRtmN2eChgiMZPmSXfPURtjL4o658ZICtYUHlKfzccE4m7waZyoLEkBLFiK2g54Q2i+CdtYBgDdkUDsoULSBMcH1MwGHwdjfXpldFNFrHFx/IAvLVniyeMQ==",
    "verificationMethod": "did:example:489398593#test"
  }
}
Holder: unpacked VC to a secure location 205
Derived proof
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1",
    "https://w3id.org/security/bbs/v1"
  ],
  "id": "https://issuer.oidp.uscis.gov/credentials/83627465",
  "type": [
    "PermanentResidentCard",
    "VerifiableCredential"
  ],
  "description": "Government of Example Permanent Resident Card.",
  "identifier": "83627465",
  "name": "Permanent Resident Card",
  "credentialSubject": {
    "id": "did:example:b34ca6cd37bbf23",
    "type": [
      "Person",
      "PermanentResident"
    ],
    "familyName": "SMITH",
    "gender": "Male",
    "givenName": "JOHN"
  },
  "expirationDate": "2029-12-03T12:19:52Z",
  "issuanceDate": "2019-12-03T12:19:52Z",
  "issuer": "did:example:489398593",
  "proof": {
    "type": "BbsBlsSignatureProof2020",
    "created": "2024-03-12T14:11:37Z",
    "nonce": "73qqC23AX+aQ/7nboGpWDondssWnTh2hr8Wt43DvtLCwI3Dw4sBVrAezc+YXkpTCTag=",
    "proofPurpose": "assertionMethod",
    "proofValue": "ABkB/wbvqRJIAfd5d6tSSgm6tiBfg2UPo/Ah4hKENMh+i4SD54NzdgcacRA2bWMoSpEYJoefgSwLgfVzQRctbIzzt3ivs8E3WVqy1A9pHPcRNgLbdD9WPO6H5OC6UsD4GM8RsALIt8J0LBz4DeWS0i2+c7K3OUmShVuHw1xSxoDGMjY6RgQ1oZUiZPakpbl9CqH/KY3PAAAAdInU73nslUnMm9eLDV1sOZCxlTrINDp5ORx5TbR1EcMQvGtnc46mEZ325KU75IZ9LwAAAAJtUPr1D8OwQbmmkmC/MvtCZPYkgiUEtCeEo272EE88oWhviiUNz0aaSXNeKIAdXRIHPVFFjgRzX9HitOKZJTtMrVpx7nMTBXdrAOL5yTWzHn3kBRR4C5iGsySBJT1daagqzHgOXP7AcC8gUIxShd8FAAAACVQsTK77lhKgkIIztt3Wnx4gxECrOjiwObbsuvXN4k3vIcH+AkZHs/s/yghUa+cpSLdYNw5JisoV0FxiW4GqSl4nm9ty6FeRmH8Kg7/Rj54yzlioNJJFMOEknJ/T7U4aU1QWM2Nk/tMdhCRJqi4I3wdWK2KnZ0wKkD5G0phK7vPEUixjqnDIGFsLZWtL+4bHc0z7WqfbBdui6tYey/TLzMpMmHU8PHf2LHtJqYqS6CP/wg5LcdhIx78rbWnQUX0tikg21o7BIKJIdmWvEXbKhVV+g0FBerVzOqiyuLwjqDjZBAj/qRAxr0PVCncQpMk6ouNe5px/MNiMYuQl+7uNQEFjagMN7RNxIuojqqGVxVdX2YshFvpYL04qr3VHmXwvfA==",
    "verificationMethod": "did:example:489398593#test"
  }
}
Verification result
{
  "verified": true,
  "results": [
    {
      "proof": {
        "@context": "https://w3id.org/security/v2",
        "type": "https://w3id.org/security#BbsBlsSignature2020",
        "created": "2024-03-12T14:11:37Z",
        "nonce": "73qqC23AX+aQ/7nboGpWDondssWnTh2hr8Wt43DvtLCwI3Dw4sBVrAezc+YXkpTCTag=",
        "proofPurpose": "assertionMethod",
        "proofValue": "ABkB/wbvqRJIAfd5d6tSSgm6tiBfg2UPo/Ah4hKENMh+i4SD54NzdgcacRA2bWMoSpEYJoefgSwLgfVzQRctbIzzt3ivs8E3WVqy1A9pHPcRNgLbdD9WPO6H5OC6UsD4GM8RsALIt8J0LBz4DeWS0i2+c7K3OUmShVuHw1xSxoDGMjY6RgQ1oZUiZPakpbl9CqH/KY3PAAAAdInU73nslUnMm9eLDV1sOZCxlTrINDp5ORx5TbR1EcMQvGtnc46mEZ325KU75IZ9LwAAAAJtUPr1D8OwQbmmkmC/MvtCZPYkgiUEtCeEo272EE88oWhviiUNz0aaSXNeKIAdXRIHPVFFjgRzX9HitOKZJTtMrVpx7nMTBXdrAOL5yTWzHn3kBRR4C5iGsySBJT1daagqzHgOXP7AcC8gUIxShd8FAAAACVQsTK77lhKgkIIztt3Wnx4gxECrOjiwObbsuvXN4k3vIcH+AkZHs/s/yghUa+cpSLdYNw5JisoV0FxiW4GqSl4nm9ty6FeRmH8Kg7/Rj54yzlioNJJFMOEknJ/T7U4aU1QWM2Nk/tMdhCRJqi4I3wdWK2KnZ0wKkD5G0phK7vPEUixjqnDIGFsLZWtL+4bHc0z7WqfbBdui6tYey/TLzMpMmHU8PHf2LHtJqYqS6CP/wg5LcdhIx78rbWnQUX0tikg21o7BIKJIdmWvEXbKhVV+g0FBerVzOqiyuLwjqDjZBAj/qRAxr0PVCncQpMk6ouNe5px/MNiMYuQl+7uNQEFjagMN7RNxIuojqqGVxVdX2YshFvpYL04qr3VHmXwvfA==",
        "verificationMethod": "did:example:489398593#test"
      },
      "verified": true
    }
  ]
}
Holder: new document is {
  '@context': [Array],
  id: 'https://issuer.oidp.uscis.gov/credentials/83627465',
  type: [Array],
  description: 'Government of Example Permanent Resident Card.',
  identifier: '83627465',
  name: 'Permanent Resident Card',
  credentialSubject: [Object],
  expirationDate: '2029-12-03T12:19:52Z',
  issuanceDate: '2019-12-03T12:19:52Z',
  issuer: 'did:example:489398593',
  proof: [Object]
}
Holder: derivation success
# Holder created dervided VC: {
  '@context': [Array],
  id: 'https://issuer.oidp.uscis.gov/credentials/83627465',
  type: [Array],
  description: 'Government of Example Permanent Resident Card.',
  identifier: '83627465',
  name: 'Permanent Resident Card',
  credentialSubject: [Object],
  expirationDate: '2029-12-03T12:19:52Z',
  issuanceDate: '2019-12-03T12:19:52Z',
  issuer: 'did:example:489398593',
  proof: [Object]
}
# Holder send notification to Verifier
Holder: sending derived VC to Verifier
discovering inbox via http://localhost:3000/verifier/profile/card#me
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3000/verifier/inbox/>; rel="http://www.w3.org/ns/ldp#inbox", <http://localhost:3000/verifier/profile/card.meta>; rel="describedby", <http://localhost:3000/verifier/profile/card.acl>; rel="acl", <http://localhost:3000/verifier/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
Discovered inbox: http://localhost:3000/verifier/inbox/
sending message
{
  "id": "ltu8z6bt2a738upgqqn",
  "from": "http://localhost:3000/holder/profile/card#me",
  "to": "http://localhost:3000/verifier/profile/card#me",
  "type": "https://example.org/IPCEP/transfer",
  "created_time": "2024-03-12T15:33:17.129Z",
  "body": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://w3id.org/citizenship/v1",
      "https://w3id.org/security/bbs/v1"
    ],
    "id": "https://issuer.oidp.uscis.gov/credentials/83627465",
    "type": [
      "PermanentResidentCard",
      "VerifiableCredential"
    ],
    "description": "Government of Example Permanent Resident Card.",
    "identifier": "83627465",
    "name": "Permanent Resident Card",
    "credentialSubject": {
      "id": "did:example:b34ca6cd37bbf23",
      "type": [
        "Person",
        "PermanentResident"
      ],
      "familyName": "SMITH",
      "gender": "Male",
      "givenName": "JOHN"
    },
    "expirationDate": "2029-12-03T12:19:52Z",
    "issuanceDate": "2019-12-03T12:19:52Z",
    "issuer": "did:example:489398593",
    "proof": {
      "type": "BbsBlsSignatureProof2020",
      "created": "2024-03-12T14:11:37Z",
      "nonce": "73qqC23AX+aQ/7nboGpWDondssWnTh2hr8Wt43DvtLCwI3Dw4sBVrAezc+YXkpTCTag=",
      "proofPurpose": "assertionMethod",
      "proofValue": "ABkB/wbvqRJIAfd5d6tSSgm6tiBfg2UPo/Ah4hKENMh+i4SD54NzdgcacRA2bWMoSpEYJoefgSwLgfVzQRctbIzzt3ivs8E3WVqy1A9pHPcRNgLbdD9WPO6H5OC6UsD4GM8RsALIt8J0LBz4DeWS0i2+c7K3OUmShVuHw1xSxoDGMjY6RgQ1oZUiZPakpbl9CqH/KY3PAAAAdInU73nslUnMm9eLDV1sOZCxlTrINDp5ORx5TbR1EcMQvGtnc46mEZ325KU75IZ9LwAAAAJtUPr1D8OwQbmmkmC/MvtCZPYkgiUEtCeEo272EE88oWhviiUNz0aaSXNeKIAdXRIHPVFFjgRzX9HitOKZJTtMrVpx7nMTBXdrAOL5yTWzHn3kBRR4C5iGsySBJT1daagqzHgOXP7AcC8gUIxShd8FAAAACVQsTK77lhKgkIIztt3Wnx4gxECrOjiwObbsuvXN4k3vIcH+AkZHs/s/yghUa+cpSLdYNw5JisoV0FxiW4GqSl4nm9ty6FeRmH8Kg7/Rj54yzlioNJJFMOEknJ/T7U4aU1QWM2Nk/tMdhCRJqi4I3wdWK2KnZ0wKkD5G0phK7vPEUixjqnDIGFsLZWtL+4bHc0z7WqfbBdui6tYey/TLzMpMmHU8PHf2LHtJqYqS6CP/wg5LcdhIx78rbWnQUX0tikg21o7BIKJIdmWvEXbKhVV+g0FBerVzOqiyuLwjqDjZBAj/qRAxr0PVCncQpMk6ouNe5px/MNiMYuQl+7uNQEFjagMN7RNxIuojqqGVxVdX2YshFvpYL04qr3VHmXwvfA==",
      "verificationMethod": "did:example:489398593#test"
    }
  }
}
201
notification to be found at http://localhost:3000/verifier/inbox/adcc1021-f6a2-45a1-8623-867c8c906d7e
# Verifier receive and process notification
Verifier: Discovering notifications
discovering inbox via http://localhost:3000/verifier/profile/card#me
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3000/verifier/inbox/>; rel="http://www.w3.org/ns/ldp#inbox", <http://localhost:3000/verifier/profile/card.meta>; rel="describedby", <http://localhost:3000/verifier/profile/card.acl>; rel="acl", <http://localhost:3000/verifier/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
Discovered inbox: http://localhost:3000/verifier/inbox/
notifications discovery: status 200
@prefix dc: <http://purl.org/dc/terms/>.
@prefix ldp: <http://www.w3.org/ns/ldp#>.
@prefix posix: <http://www.w3.org/ns/posix/stat#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

<> a ldp:Container, ldp:BasicContainer, ldp:Resource;
    dc:modified "2024-03-12T15:33:17.000Z"^^xsd:dateTime;
    ldp:contains <7ca5fb4f-0870-46a2-bd26-6a0d72592da9>, <2d91b13e-69a2-4864-be63-b72994cee6cc>, <7cfc0c1f-391c-47e6-8db9-cc84a55ec2d6>, <e9a01b0c-0dbc-402a-b01c-0a910cfed065>, <b3ffb872-d4e8-40ae-bf8b-9bdde9f8a9c2>, <009c4237-405a-4b88-a648-e616e1537d8b>, <d1d2ff64-8a22-4d94-b815-b7331dd60774>, <2d80de78-9f8b-44c4-b9d0-374865324ae8>, <7e51d658-b861-47a3-ad97-ecc9e5ec4ea4>, <236ed368-862f-4139-9928-ebd93a5b0d5b>, <9c6a8050-155d-474c-923d-81c3472ddb8d>, <c6aa1c34-f485-4d7d-8046-1f46db71a091>, <33be01c1-2b47-402a-b4f7-5ad739a75c5a>, <ab38912a-f10e-4d45-b33f-1d5c3817549e>, <403b07c3-b464-4377-95f9-977aa61e5e46>, <adcc1021-f6a2-45a1-8623-867c8c906d7e>.

ldp:contains <7ca5fb4f-0870-46a2-bd26-6a0d72592da9>, <2d91b13e-69a2-4864-be63-b72994cee6cc>, <7cfc0c1f-391c-47e6-8db9-cc84a55ec2d6>, <e9a01b0c-0dbc-402a-b01c-0a910cfed065>, <b3ffb872-d4e8-40ae-bf8b-9bdde9f8a9c2>, <009c4237-405a-4b88-a648-e616e1537d8b>, <d1d2ff64-8a22-4d94-b815-b7331dd60774>, <2d80de78-9f8b-44c4-b9d0-374865324ae8>, <7e51d658-b861-47a3-ad97-ecc9e5ec4ea4>, <236ed368-862f-4139-9928-ebd93a5b0d5b>, <9c6a8050-155d-474c-923d-81c3472ddb8d>, <c6aa1c34-f485-4d7d-8046-1f46db71a091>, <33be01c1-2b47-402a-b4f7-5ad739a75c5a>, <ab38912a-f10e-4d45-b33f-1d5c3817549e>, <403b07c3-b464-4377-95f9-977aa61e5e46>, <adcc1021-f6a2-45a1-8623-867c8c906d7e>.
7ca5fb4f-0870-46a2-bd26-6a0d72592da9
2d91b13e-69a2-4864-be63-b72994cee6cc
7cfc0c1f-391c-47e6-8db9-cc84a55ec2d6
e9a01b0c-0dbc-402a-b01c-0a910cfed065
b3ffb872-d4e8-40ae-bf8b-9bdde9f8a9c2
009c4237-405a-4b88-a648-e616e1537d8b
d1d2ff64-8a22-4d94-b815-b7331dd60774
2d80de78-9f8b-44c4-b9d0-374865324ae8
7e51d658-b861-47a3-ad97-ecc9e5ec4ea4
236ed368-862f-4139-9928-ebd93a5b0d5b
9c6a8050-155d-474c-923d-81c3472ddb8d
c6aa1c34-f485-4d7d-8046-1f46db71a091
33be01c1-2b47-402a-b4f7-5ad739a75c5a
ab38912a-f10e-4d45-b33f-1d5c3817549e
403b07c3-b464-4377-95f9-977aa61e5e46
adcc1021-f6a2-45a1-8623-867c8c906d7e
Verifier: filtering notifications
getting notification at http://localhost:3000/verifier/inbox/7ca5fb4f-0870-46a2-bd26-6a0d72592da9
Verifier: Received message from Holder! http://localhost:3000/verifier/inbox/7ca5fb4f-0870-46a2-bd26-6a0d72592da9
Verifier: consuming the received credential and verifying it
Verifier: notification type is https://example.org/IPCEP/transfer
{
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/citizenship/v1',
    'https://w3id.org/security/bbs/v1'
  ],
  id: 'https://issuer.oidp.uscis.gov/credentials/83627465',
  type: [ 'PermanentResidentCard', 'VerifiableCredential' ],
  description: 'Government of Example Permanent Resident Card.',
  identifier: '83627465',
  name: 'Permanent Resident Card',
  credentialSubject: {
    id: 'did:example:b34ca6cd37bbf23',
    type: [ 'Person', 'PermanentResident' ],
    familyName: 'SMITH',
    gender: 'Male',
    givenName: 'JOHN'
  },
  expirationDate: '2029-12-03T12:19:52Z',
  issuanceDate: '2019-12-03T12:19:52Z',
  issuer: 'did:example:489398593',
  proof: {
    type: 'BbsBlsSignatureProof2020',
    created: '2024-03-12T14:11:37Z',
    nonce: 'EI9KttDcJU7tsudTP/c/MMFVTHET11MoVOYdgQIOrGviIa/o8YziYuUQVjrFxDmtJN8=',
    proofPurpose: 'assertionMethod',
    proofValue: 'ABkB/wbvqRJIAfd5d6tSSgm6tiBfg2UPo/Ah4hKENMh+i4SD54NzdgcacRA2bWMoSpEYJoefgSwLgfVzQRctbIzzt3ivs8E3WVqy1A9pHPcRNgLbdD9WPO6H5OC6UsD4GM8RsALIt8J0LBz4DeWS0i2+c7K3OUmShVuHw1xSxoDGMjY6RgQ1oZUiZPakpbl9CqH/KY3PAAAAdInU73nslUnMm9eLDV1sOZCxlTrINDp5ORx5TbR1EcMQvGtnc46mEZ325KU75IZ9LwAAAAIGqbAyn+nDWEVNWYyNCsHGnfS3kKH82VNXQh0yW49VlRe5U9Wvw3nj2F28sCVU3U1TOD5Whk/cfs88HF/Nd/3QrVpx7nMTBXdrAOL5yTWzHn3kBRR4C5iGsySBJT1daagqzHgOXP7AcC8gUIxShd8FAAAACWU4yH4q1IIwKiwiFdEUBRV+YhN/zO/eDb88t86HOVLMN1aMk1eaQUmB7JI2hG7FAsOaIkRiGR1R5n6nF5wsCdNzxKizLkk6S4uePhF2kcpi1JmJ6coICaxbDs1c3qjwbEbXOIZrn/FDBIeKouTT7JnCgav9Iz77EvN1HtgCnL0QA/VwN6CIrhCtgEL8s6dnAIv/TF24uqBd292nmb4vT6EPvnuC3SdAJUAvGuyvOhSIRlA/Ki2k1EogxqE3RKmPLw4Qhfr1tq487Ju8OSxGvhs3xSpRYflprHrIU42zJbsKDRFyMiNvWtIYm8bdElXD/Gi4wIY8wn8Ae1IfSzuLGH9XxX2rhESNmaKAH0X/MRmJ+STZkIRyAop0PqGA2OP3hA==',
    verificationMethod: 'did:example:489398593#test'
  }
}
Derived proof
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1",
    "https://w3id.org/security/bbs/v1"
  ],
  "id": "https://issuer.oidp.uscis.gov/credentials/83627465",
  "type": [
    "PermanentResidentCard",
    "VerifiableCredential"
  ],
  "description": "Government of Example Permanent Resident Card.",
  "identifier": "83627465",
  "name": "Permanent Resident Card",
  "credentialSubject": {
    "id": "did:example:b34ca6cd37bbf23",
    "type": [
      "Person",
      "PermanentResident"
    ],
    "familyName": "SMITH",
    "gender": "Male",
    "givenName": "JOHN"
  },
  "expirationDate": "2029-12-03T12:19:52Z",
  "issuanceDate": "2019-12-03T12:19:52Z",
  "issuer": "did:example:489398593",
  "proof": {
    "type": "BbsBlsSignatureProof2020",
    "created": "2024-03-12T14:11:37Z",
    "nonce": "EI9KttDcJU7tsudTP/c/MMFVTHET11MoVOYdgQIOrGviIa/o8YziYuUQVjrFxDmtJN8=",
    "proofPurpose": "assertionMethod",
    "proofValue": "ABkB/wbvqRJIAfd5d6tSSgm6tiBfg2UPo/Ah4hKENMh+i4SD54NzdgcacRA2bWMoSpEYJoefgSwLgfVzQRctbIzzt3ivs8E3WVqy1A9pHPcRNgLbdD9WPO6H5OC6UsD4GM8RsALIt8J0LBz4DeWS0i2+c7K3OUmShVuHw1xSxoDGMjY6RgQ1oZUiZPakpbl9CqH/KY3PAAAAdInU73nslUnMm9eLDV1sOZCxlTrINDp5ORx5TbR1EcMQvGtnc46mEZ325KU75IZ9LwAAAAIGqbAyn+nDWEVNWYyNCsHGnfS3kKH82VNXQh0yW49VlRe5U9Wvw3nj2F28sCVU3U1TOD5Whk/cfs88HF/Nd/3QrVpx7nMTBXdrAOL5yTWzHn3kBRR4C5iGsySBJT1daagqzHgOXP7AcC8gUIxShd8FAAAACWU4yH4q1IIwKiwiFdEUBRV+YhN/zO/eDb88t86HOVLMN1aMk1eaQUmB7JI2hG7FAsOaIkRiGR1R5n6nF5wsCdNzxKizLkk6S4uePhF2kcpi1JmJ6coICaxbDs1c3qjwbEbXOIZrn/FDBIeKouTT7JnCgav9Iz77EvN1HtgCnL0QA/VwN6CIrhCtgEL8s6dnAIv/TF24uqBd292nmb4vT6EPvnuC3SdAJUAvGuyvOhSIRlA/Ki2k1EogxqE3RKmPLw4Qhfr1tq487Ju8OSxGvhs3xSpRYflprHrIU42zJbsKDRFyMiNvWtIYm8bdElXD/Gi4wIY8wn8Ae1IfSzuLGH9XxX2rhESNmaKAH0X/MRmJ+STZkIRyAop0PqGA2OP3hA==",
    "verificationMethod": "did:example:489398593#test"
  }
}
Verification result
{
  "verified": true,
  "results": [
    {
      "proof": {
        "@context": "https://w3id.org/security/v2",
        "type": "https://w3id.org/security#BbsBlsSignature2020",
        "created": "2024-03-12T14:11:37Z",
        "nonce": "EI9KttDcJU7tsudTP/c/MMFVTHET11MoVOYdgQIOrGviIa/o8YziYuUQVjrFxDmtJN8=",
        "proofPurpose": "assertionMethod",
        "proofValue": "ABkB/wbvqRJIAfd5d6tSSgm6tiBfg2UPo/Ah4hKENMh+i4SD54NzdgcacRA2bWMoSpEYJoefgSwLgfVzQRctbIzzt3ivs8E3WVqy1A9pHPcRNgLbdD9WPO6H5OC6UsD4GM8RsALIt8J0LBz4DeWS0i2+c7K3OUmShVuHw1xSxoDGMjY6RgQ1oZUiZPakpbl9CqH/KY3PAAAAdInU73nslUnMm9eLDV1sOZCxlTrINDp5ORx5TbR1EcMQvGtnc46mEZ325KU75IZ9LwAAAAIGqbAyn+nDWEVNWYyNCsHGnfS3kKH82VNXQh0yW49VlRe5U9Wvw3nj2F28sCVU3U1TOD5Whk/cfs88HF/Nd/3QrVpx7nMTBXdrAOL5yTWzHn3kBRR4C5iGsySBJT1daagqzHgOXP7AcC8gUIxShd8FAAAACWU4yH4q1IIwKiwiFdEUBRV+YhN/zO/eDb88t86HOVLMN1aMk1eaQUmB7JI2hG7FAsOaIkRiGR1R5n6nF5wsCdNzxKizLkk6S4uePhF2kcpi1JmJ6coICaxbDs1c3qjwbEbXOIZrn/FDBIeKouTT7JnCgav9Iz77EvN1HtgCnL0QA/VwN6CIrhCtgEL8s6dnAIv/TF24uqBd292nmb4vT6EPvnuC3SdAJUAvGuyvOhSIRlA/Ki2k1EogxqE3RKmPLw4Qhfr1tq487Ju8OSxGvhs3xSpRYflprHrIU42zJbsKDRFyMiNvWtIYm8bdElXD/Gi4wIY8wn8Ae1IfSzuLGH9XxX2rhESNmaKAH0X/MRmJ+STZkIRyAop0PqGA2OP3hA==",
        "verificationMethod": "did:example:489398593#test"
      },
      "verified": true
    }
  ]
}
Verifier: Verification result { document: [Object], verification: [Object] }
```
